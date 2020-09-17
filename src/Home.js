import React from 'react'; //use of react and react dom  --main pakage and dom to render;

import Search from './Search';
import QuickSearch from './quicksearch';
//functional component 
//Since the detail page has to be separate page we have to introduce the routing 
// so routing is used to build the component that are the separate page 


const Home = (props) => {
    console.log(">>>>")
    console.log(props);
    const handleRestaurent = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return (
        <div>
            <Search restid={(data) => { handleRestaurent(data) }} />
            <QuickSearch />

        </div>
    );
}

export default Home;