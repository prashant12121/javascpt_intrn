import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

const restdetail = "http://localhost:8900/restauranthomie";
class CostFilter extends Component {

    costFilter = (event) => {

        let cost = (event.target.value).split(',');
        let lcost = Number(cost[0]);
        this.props.newlcost(lcost);
        let hcost = Number(cost[1]);
        console.log(hcost)
        this.props.newhcost(hcost);
        let cuisine = this.props.cuisine;
        console.log(cuisine);
        let url;
        var sort = this.props.sortvar;

        var city_id = localStorage.getItem('citi_id');
        let mealid = parseInt(this.props.mealIdnum);

        if (sort == '') {

            if (event.target.value == "" && cuisine == "") {
                url = `${restdetail}/${city_id}/${mealid}`
            }

            else if (cuisine == "" && event.target.value !== "") {
                url = `${restdetail}/${city_id}/${mealid}?lcost=${lcost}&hcost=${hcost}`
                console.log(url)
            }

            else if (event.target.value != "" && cuisine != "") {
                url = `${restdetail}/${city_id}/${mealid}?hcost=${hcost}&&lcost=${lcost}&&cuisine=${cuisine}`
                console.log(url)
            }
        }
        else {

            if (event.target.value == "" && cuisine == "") {
                url = `${restdetail}/${city_id}/${mealid}?sort=${sort}`
            }

            else if (cuisine == "" && event.target.value !== "") {
                url = `${restdetail}/${city_id}/${mealid}?lcost=${lcost}&hcost=${hcost}&&sort=${sort}`
                console.log(url)
            }

            else if (event.target.value != "" && cuisine != "") {
                url = `${restdetail}/${city_id}/${mealid}?hcost=${hcost}&&lcost=${lcost}&&cuisine=${cuisine}&&sort=${sort}`
                console.log(url)
            }

        }
        console.log(url);

        axios.get(url)
            .then((response) => { this.props.restpercost(response.data) })

    }

    render() {
        return (
            <React.Fragment>

                <div className="newdiv" onChange={this.costFilter}>
                    <center><h4><b>Cost</b></h4></center>
                    <hr />
                    <label className="radio">
                        <input type="radio" value="" name="range" /> All
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="0,500" name="range" /> 0-500
                            </label><br />
                    <label className="radio">
                        <input type="radio" value="501,1000" name="range" /> 500-1000
                            </label><br />
                </div>
            </React.Fragment>
        )
    }
}


export default CostFilter