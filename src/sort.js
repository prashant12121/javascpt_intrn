import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

const restdetail = "http://localhost:8900/restauranthomie"



class SortFilter extends Component {

    sortFilter = (event) => {

        const value = parseInt(event.target.value);
        console.log(value);
        this.props.sortvalue(value);
        const cuisine = this.props.cuisine;
        const lcost = this.props.lcost;
        console.log(lcost);
        const hcost = this.props.hcost;
        console.log(hcost);
        let url;

        var city_id = localStorage.getItem('citi_id');
        let mealid = parseInt(this.props.mealIdnum);


        if (cuisine !== '' && lcost != hcost) {
            url = `${restdetail}/${city_id}/${mealid}?cuisine=${cuisine}&&lcost=${lcost}&&hcost=${hcost}&&sort=${value}`
        }
        else if (cuisine != '') {
            url = `${restdetail}/${city_id}/${mealid}?cuisine=${cuisine}&&sort=${value}`
        }
        else if (lcost !== hcost) {
            url = `${restdetail}/${city_id}/${mealid}?lcost=${lcost}&&hcost=${hcost}&&sort=${value}`
        }
        else {
            url = `${restdetail}/${city_id}/${mealid}?sort=${value}`
        }

        console.log(url)
        Axios.get(url).then((response) => {
            console.log(response.data)
            this.props.sorteddata(response.data)
        })

    }


    render() {
        return (
            <React.Fragment>
                <div className="newdiv" onChange={this.sortFilter}>
                    <center><h5><b>Sort</b></h5></center>
                    <hr />
                    <label className="radio">
                        <input type="radio" value="1" name="sort" />Cost from low to High
                </label><br />
                    <label className="radio">
                        <input type="radio" value="-1" name="sort" />Cost from high to low
                </label><br />
                </div>
            </React.Fragment>
        )
    }
}

export default SortFilter;