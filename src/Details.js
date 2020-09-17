import React, { Component } from 'react';
import Axios from 'axios';
import DetailDisplay from './Detaildisplay';
import CostFilter from './costSortbar';
import CusineFilter from './cuisineSort';
import SortFilter from './sort';
import './App.css'

const url = 'http://localhost:8900/restauranthomie'

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restlist: [],
            cuisine: "",
            lcost: 1,
            hcost: 1,
            sort: '',
        }

    }

    setDataPerCuisine(sortedData) {
        this.setState({ restlist: sortedData })
    }
    setDataPerCost(sortedData) {
        this.setState({ restlist: sortedData })
    }

    sethCost(data) {
        this.setState({ hcost: data })

    }

    setlCost(data) {
        this.setState({ lcost: data })

    }

    setCuisine(data) {

        this.setState({ cuisine: data })
    }

    setSort(data) {
        this.setState({ sort: data })
        console.log(data);
    }

    setSortedData(data) {
        this.setState({ restlist: data })
        console.log("restlist")
        console.log(data);
    }

    render() {
        console.log(this.state.restlist)
        return (
            <div>
                <div className="row marg">
                    <div className="col-md-2 css">
                        <h3 className="filter">Filters</h3>
                        <div>
                            <CusineFilter mealIdnum={parseInt(this.props.match.params.id)} sortvar={this.state.sort} lcost={this.state.lcost} hcost={this.state.hcost} restpercuisine={(data) => { this.setDataPerCuisine(data) }} newcuisine={(data) => { this.setCuisine(data) }} />
                        </div>
                        <div>
                            <CostFilter mealIdnum={parseInt(this.props.match.params.id)} sortvar={this.state.sort} cuisine={this.state.cuisine} restpercost={(data) => { this.setDataPerCost(data) }} newlcost={(data) => { this.setlCost(data) }} newhcost={(data) => { this.sethCost(data) }} />
                        </div>
                        <div>
                            <SortFilter mealIdnum={parseInt(this.props.match.params.id)} sortvalue={(data) => { this.setSort(data) }} cuisine={this.state.cuisine} lcost={this.state.lcost} hcost={this.state.hcost} sorteddata={(data) => { this.setSortedData(data) }} />
                        </div>
                    </div>

                    <div className="col-md-10">
                        <div className="row-md-2">
                            <DetailDisplay restdata={this.state.restlist} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props)
        var city_id = localStorage.getItem('citi_id');
        var mealid = parseInt(this.props.match.params.id);
        Axios.get(`${url}/${city_id}/${mealid}`).then((response) => {
            this.setState({ restlist: response.data })
        })
    }

}
export default Details;
