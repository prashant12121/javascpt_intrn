import React, { Component } from 'react';

const orderUrl = "http://localhost:8900/placeOrder";
class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            order_id: Math.floor(Math.random() * 10000),
            name: "",
            phone: "",
            email: "",
            address: "",
            rest_id: this.props.match.params.id,
            person: 1

        }
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleChangePhone = (event) => {
        this.setState({ phone: event.target.value })
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangeAddress = (event) => {
        this.setState({ address: event.target.value })
    }
    handleChangePerson = (event) => {
        this.setState({ person: event.target.value })
    }

    handleSubmit = () => {
        var data = {
            "order_id": this.state.order_id,
            "name": this.state.name,
            "phone": this.state.phone,
            "email": this.state.email,
            "address": this.state.address,
            "rest_id": this.state.rest_id,
            "person": this.state.person
        }

        fetch(orderUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((this.props.history.push('/orderDisplay')))
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-success">

                    <div className="panel-heading">
                        <center>   <h3>Place Order</h3> </center>
                    </div>

                    <div className="panel-body">

                        <div className="form-group">
                            <label className="control-label">Order_Id:</label>
                            <input type="text" name="order_id"
                                value={this.state.order_id}
                                readOnly
                                className="form-control" />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Rest_Id:</label>
                            <input type="text" name="rest_id"
                                value={this.state.rest_id}
                                readOnly
                                className="form-control" />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Name:</label>
                            <input type="text" name="name"
                                value={this.state.name}
                                className="form-control"
                                required
                                onChange={this.handleChangeName} />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Phone:</label>
                            <input type="text" name="phone"
                                value={this.state.phone}
                                className="form-control"
                                required
                                onChange={this.handleChangePhone} />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Email:</label>
                            <input type="text" name="email"
                                value={this.state.email}
                                className="form-control"
                                onChange={this.handleChangeEmail} />
                        </div>

                        <div className="form-group">
                            <label className="control-label">address:</label>
                            <input type="text" name="address"
                                value={this.state.address}
                                className="form-control"
                                onChange={this.handleChangeAddress} />
                        </div>

                        <div className="form-group">
                            <label className="control-label">How many Person:</label>
                            <select name="person" value={this.state.person}
                                className="form-control"
                                onChange={this.handleChangePerson}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div>
                            <button className="btn btn-success"
                                onClick={this.handleSubmit}
                            >Place Order</button>
                            &nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger"
                                onClick={this.handleCancel}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}


export default Forms;