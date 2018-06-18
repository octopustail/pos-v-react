import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart.react'
import './App.css';

class ItemList extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
        this.state = {
            selectList: this.props.selectList
        }
    }

    clickHandle(e) {
        let selectList = this.state.selectList;
        let item = this.props.itemList.find((value) => {
            return value.barcode === e.target.getAttribute('barcode')
        });

        selectList.push(item)
        console.log(this.props.selectList);

        this.setState({
            selectList: selectList
        })


    }


    render() {
        let list = this.props.itemList;


        return (
            <ul>
                {
                    list.map((item) => {
                        return <li>
                            <span>{item.name}</span><span>{item.unit}</span><span>{item.price}</span><span>{item.promotion}</span>
                            <span barcode={item.barcode} onClick={this.clickHandle.bind(this)}>加入购物车</span></li>
                    })
                }
                <ShoppingCart selectList={this.state.selectList}/>
            </ul>

        );
    }
}

export default ItemList;
