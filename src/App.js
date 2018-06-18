import React, {Component} from 'react';
import ItemList from './ItemList.react'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectList: [],
            itemList: [
                {
                    barcode: 'ITEM000000',
                    name: '可口可乐',
                    unit: '瓶',
                    price: 3.00
                },
                {
                    barcode: 'ITEM000001',
                    name: '雪碧',
                    unit: '瓶',
                    price: 3.00
                },
                {
                    barcode: 'ITEM000002',
                    name: '苹果',
                    unit: '斤',
                    price: 5.50
                },
                {
                    barcode: 'ITEM000003',
                    name: '荔枝',
                    unit: '斤',
                    price: 15.00
                },
                {
                    barcode: 'ITEM000004',
                    name: '电池',
                    unit: '个',
                    price: 2.00
                },
                {
                    barcode: 'ITEM000005',
                    name: '方便面',
                    unit: '袋',
                    price: 4.50
                }
            ],
            promotion: [
                {
                    type: 'BUY_TWO_GET_ONE_FREE',
                    barcodes: [
                        'ITEM000000',
                        'ITEM000001',
                        'ITEM000005'
                    ]
                }
            ]
        };


    }


    // addSelectList = (selectItem) => {
    //     console.log('this', this);
    //     let selectList = this.state.selectList;
    //     console.log('selectList',selectList);
    //     selectList = selectList.push(selectItem)
    //     //this.selectList 直接引用？
    //     this.setState({
    //         selectList :selectList
    //     })

    // }

    render() {
        return (
            <div className="App">


                <ItemList addSelectList={this.addSelectList} selectList={this.state.selectList}
                          itemList={this.state.itemList} promotion={this.state.promotion}/>

            </div>
        );
    }
}

export default App;
