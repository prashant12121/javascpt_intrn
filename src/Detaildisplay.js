import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './detailDisplay.css'
import Spacer from 'react-add-space';

class DetailDisplay extends Component {
    constructor(props) {
        super(props);
    }


    renderTable = ({ restdata }) => {
        console.log("detail display")
        if (restdata.length === 0) {
            return <center><h1>Sorry! No Result Found </h1></center>
        }
        else if (restdata) {
            return restdata.map((item, index) => {
                return (
                    <div key={index} className="cont">
                        <div className="row-md-1">

                            <div className="column">
                                <img src={item.thumb} className="imag" />
                            </div>

                            <div className="column">
                                <div> <Link to={`/rest/${item._id}`}><h3>{item.name}</h3></Link></div>
                                <div>{item.locality}</div>
                                <div>{item.address}</div>
                                <div></div>
                            </div>

                        </div>

                        <hr />

                        <div className="row-md-1 textcolor">
                            <div><b>Cuisines:</b> <Spacer amount={26} />{item.Cuisine[0].name},{item.Cuisine[1].name}</div>
                            <div><b>Cost For Two:</b>  <Spacer amount={18} />Rs{item.cost} </div>
                        </div>
                    </div>

                )
            })
        }
    }


    render() {
        return (
            <div>
                <div className="contain">
                    {console.log(this.props)}
                    {this.renderTable(this.props)}
                </div>
            </div>
        )
    }


}

export default DetailDisplay;