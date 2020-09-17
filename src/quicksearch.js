import React, { Component } from 'react';
import axios from 'axios';
import QuickSearchDisplay from './QuickSearchDisplay';
import './App.css'

const url = "http://localhost:8900/mealtype";
class QuickSearch extends Component {
    constructor() {
        console.log("constructor");
        super()
        this.state = {
            mealType: ''
        }
    }

    render() {
        console.log("render")
        return (
            <div>
                <QuickSearchDisplay data={this.state.mealType} />
            </div>
        )
    }

    componentDidMount() {
        console.log("didmount");
        axios.get(`${url}`).then((response) => {
            this.setState({ mealType: response.data })
        })
    }

}

export default QuickSearch;