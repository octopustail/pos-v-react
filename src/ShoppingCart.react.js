import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

class ShoppingCart extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    clickHandleConfirm() {
        let selectList = this.props.selectList;
        this.generateSelectListString(selectList)
    }

    AjaxPost(selectItemString) {
        $.post("", {
            selectItemString:selectItemString
        },function () {
            console.log('ajax succeed')
        })
    }

    generateSelectListString(selectList) {
        console.log('selectList', selectList);
        let slString = selectList.reduce((str, elem) => {
                str = str + elem.barcode + ',';
                return str
            }, ''
        );

        this.AjaxPost(slString)

    }


    clickHandle(e) {

        // let item = this.props.itemList.find((value) => {
        //     return value.barcode === e.target.getAttribute('barcode')
        // });
        // console.log(this.props.selectList);
        //
        // return this.props.addSelectList(item)


    }


    render() {
        let list = this.props.selectList;
        let btn = (list.length === 0) ? null : <button onClick={this.clickHandleConfirm.bind(this)}>确认</button>;

        return (
            <div>
                <ul>

                    {
                        list.map((item) => {
                            return <li>
                                <span>{item.name}</span><span>{item.unit}</span><span>{item.price}</span><span>{item.promotion}</span>
                            </li>
                        })
                    }
                </ul>
                <div>{btn}</div>
            </div>


        );
    }
}

export default ShoppingCart;
