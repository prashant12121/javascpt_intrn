import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import './detailDisplay.css';

const restdetail = "http://localhost:8900/restauranthomie";

class CusineFilter extends Component {

    cuisineFilter = (event) => {
        //sessionStorage.setItem('mealid',this.props.match.params.id)
        console.log(this.props)
        let cuisine = Number(event.target.value);
        this.props.newcuisine(cuisine);
        let url;
        let sort = this.props.sortvar;

        var city_id = localStorage.getItem('citi_id');
        let mealid = parseInt(this.props.mealIdnum)


        if (sort === '') {
            console.log("sort is empty");
            if (this.props.lcost === this.props.hcost) {
                if (cuisine == "") {
                    url = `${restdetail}/${city_id}/${mealid}`
                } else {
                    url = `${restdetail}/${city_id}/${mealid}?cuisine=${cuisine}`
                }
            }
            else {
                url = `${restdetail}/${city_id}/${mealid}?cuisine=${cuisine}&&lcost=${this.props.lcost}&&hcost=${this.props.hcost}`
            }

            console.log(url)
        }
        else {
            console.log("sort has value")
            if (this.props.lcost === this.props.hcost) {
                if (cuisine == "") {
                    url = `${restdetail}/${city_id}/${mealid}?sort=${sort}`
                } else {
                    url = `${restdetail}/${city_id}/${mealid}?cuisine=${cuisine}&&sort=${sort}`
                }
            }
            else {
                url = `${restdetail}/${city_id}/${mealid}?cuisine=${cuisine}&&lcost=${this.props.lcost}&&hcost=${this.props.hcost}&&sort=${sort}`
            }
            console.log(`${url}`)
        }

        axios.get(url)
            .then((response) => { this.props.restpercuisine(response.data) })
    }


    render() {
        return (
            <React.Fragment>
                <div className="newdiv" onChange={this.cuisineFilter}>
                    <center><h4><b>Cuisine</b></h4></center>
                    <hr />
                    <label className="radio">
                        <input type="radio" value="" name="cuisine" /> All
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine" /> North
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine" /> South
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine" /> Chinese
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine" /> Fast Food
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine" /> Sreet Food
                            </label>
                    <br />
                </div>
            </React.Fragment>
        )
    }
}


export default CusineFilter