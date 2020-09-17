import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import shutterstock_11540x from "./images/shutterstock_1154073754@3x.png";
import pexels_elevate1267320 from "./images/pexels_elevate1267320.jpg";
import vegetables_tacos_with_cilantro_and_lemon from "./images/vegetables_tacos_with_cilantro_and_lemon.jpg";
//import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import './Restaurant.css'

const restdetail = "http://localhost:8900/restaurantdetail";

class Restaurant extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rest: {
                name: "none",
                Cuisine: "none",
                type: "none"
            }
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    backbutton = (event) => {
        let mealid = parseInt(sessionStorage.getItem('mealid'));
        this.props.history.push(`/details/${mealid}`);
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        var { rest } = this.state
        return (


            <div className="container-fluid">

                <div className="panel panel-default">
                    <div className="panel-headin x">
                        <center>  <h2>  {rest.name} </h2> </center>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-8">
                                <Slider ref={c => (this.slider = c)} {...settings}>
                                    <div key={1}>
                                        <img src={shutterstock_11540x} id="mimage" className="wide" />
                                    </div>
                                    <div key={2}>
                                        <img src={pexels_elevate1267320} id="mimage" className="wide" />
                                    </div>
                                    <div key={3}>
                                        <img src={vegetables_tacos_with_cilantro_and_lemon} id="mimage" className="wide" />
                                    </div>
                                    <div key={4}>
                                        <img src={rest.thumb} id="mimage" className="wide" />
                                    </div>
                                </Slider>
                                <br />
                                <div style={{ textAlign: "center" }}>
                                    <button className="button" onClick={this.previous}>
                                        Previous
                                        </button>
                                    <button className="button" onClick={this.next}>
                                        Next
                                        </button>
                                </div>
                            </div>
                            <div className="col-md-4 shift">
                                <Tabs>
                                    <TabList>
                                        <center><Tab><span className="overview">Overview</span></Tab>
                                            <Tab><span className="overview">Contact</span></Tab></center>
                                    </TabList>

                                    <TabPanel>
                                        <div className="leftshift">
                                            <div className="b"><center><h3>About this Place</h3></center></div>
                                            <br />
                                            <div className="b"><h3>Cuisines & Meals are </h3></div>
                                            <div className="a">{rest.Cuisine[0].name}  and {rest.Cuisine[1].name}</div>
                                            <div className="a">{rest.type[0].name}  and  {rest.type[1].name}</div>
                                            <br />
                                            <div className="b">Average Cost</div>
                                            <div className="a">{rest.cost} for two people(approx).</div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="leftshift" >
                                            <div className="b">Phone Number</div>
                                            <div className="a">{rest.contact_number}</div>
                                            <br />
                                            <div className="b">The contact address</div>
                                            <div className="a">{rest.name}</div>
                                            <div className="a">{rest.locality},{rest.address}</div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>

                            <div className="row">
                                <button className="btn btn-danger btn-sm aleftshift" onClick={this.backbutton}>Back</button> &nbsp;
                                    <Link to={`/order/${this.props.match.params.id}`} className="btn btn-success btn-sm">place order</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )



    }


    componentDidMount() {

        let restid = parseInt(this.props.match.params.id)

        axios.get(`${restdetail}/${restid}`).then((response) => {
            console.log("this is from restaurant detail")
            console.log(response)
            console.log(`${restdetail}/${restid}`)
            this.setState({ rest: response.data[0] })
        })
    }



}

/*
<div className="panel-heading">
                        <h2>  {rest.name} </h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-responsive" src={rest.thumb} alt="ima" />
                            </div>
                            <div className="col-md-6">
                                <h3>{rest.name}</h3>
                                <h3>{rest.locality}</h3>
                                <h3>{rest.address}</h3>
                                <h3>{rest.cost}</h3>
                            </div>
                            <div>
                                <Tabs>*/

export default Restaurant;