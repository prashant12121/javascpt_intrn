import React, { Component } from 'react';
import axios from 'axios';
import OrderView from './orderView'

const orderdetails = "http://localhost:8900/allorders"

class OrderDisplay extends Component {
    constructor() {
        super()
        this.state = {
            orders: ''
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <OrderView orderdata={this.state.orders} />
                    </div>
                </div>
            </div>
        )

    }
    componentDidMount() {
        axios.get(`${orderdetails}`).then((response) => { this.setState({ orders: response.data }) })
    }
}

export default OrderDisplay;