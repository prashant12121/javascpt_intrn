import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



const locurl = "http://localhost:8900/location";
const url = "http://localhost:8900/restaurantdetailpercit/"

class Search extends Component {

    constructor() {
        super()
        this.state = {
            location: '',
            city: parseInt(localStorage.getItem('citi_id')) ? parseInt(localStorage.getItem('citi_id')) : 1,
            restaurantdetail: ''
        }
    }


    handleRestaurant = (event) => {
        this.props.restid(event.target.value)
    }

    handleCity = (event) => {

        const citi_id = parseInt(event.target.value);
        localStorage.setItem('citi_id', citi_id);
        console.log(`${url}${citi_id}`)
        axios.get(`${url}${citi_id}`).then((response) => { this.setState({ restaurantdetail: response.data }) })
    }

    renderCity = (data) => {
        console.log(data);
        if (data) {
            return data.map((item, value) => {
                return (
                    <option key={value} value={item.city}>{item.name}|{item.city_name}</option>
                )
            })
        }
    }

    renderRestlist = (data) => {
        if (data) {
            return data.map((item, index) => {
                return (<option key={index} value={item._id}>
                    {item.name} | {item.locality}
                </option>)
            })
        }
    }

    render() {
        return (

            <div className="imageContainer fixed-top">

                <div className="logo"> Z!</div>

                <div className="heading">
                    Find the Best resturants , cafes and bars
                 </div>

                <center>
                    <select className="locationDropDown" onChange={this.handleCity} >
                        {this.renderCity(this.state.location)}
                    </select>

                    <select id="restaurant" className="locationDrop" onChange={this.handleRestaurant}>
                        {this.renderRestlist(this.state.restaurantdetail)}
                    </select>
                </center>
            </div>

        )
    }

    componentDidMount() {
        axios.get(`${locurl}`).then((response) => { this.setState({ location: response.data }) })
    }


}

/*<input placeholder="search for hotel" onChange={this.handleRestaurant} list="restaurant" className="locationDrop" />
            <datalist id="restaurant">{this.renderRestlist(this.state.restaurantdetail)}</datalist>
                    */

export default Search;