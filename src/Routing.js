import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Header from './Header';
import Restaurant from './Restaurant';
import Forms from './forms';
import OrderDisplay from './orderDisplay';
const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={Header}></Route>
                <Route exact path='/' component={Home}></Route>
                <Route path='/details/:id' component={Details}></Route>
                <Route path="/rest/:id" component={Restaurant}></Route>
                <Route path="/order/:id" component={Forms}></Route>
                <Route path="/orderDisplay" component={OrderDisplay}></Route>

            </div>
        </BrowserRouter>
    )
}
export default Routing;

//    <Route path='/details' component={Details}></Route>