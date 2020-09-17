import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const QuickSearchDisplay = (props) => {

    const listMeal = ({ data }) => {
        if (data) {
            return data.map((item, value) => {
                return (
                    <Link key={value} to={`/details/${item.mealtype}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={require(`./images/${item.name}.jpg`)} alt={item.name} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Order your Favourate {item.name} Item now
                                    </div>
                            </div>

                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeding">
                    Quick Searches
            </p>
                <p className="quickSearchSubHeding">
                    Discover restaurants by type of meal
            </p>

                {listMeal(props)}

            </div>
        </div>
    )
}

export default QuickSearchDisplay;