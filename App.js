import React from "react";
import ReactDOM from "react-dom/client";

/**
 *Header 
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantCard
 *          -Img
 *          -Name of Res , Star rating , cuisine , delery tie
 * Footer
 *  -Copyright
 *  -links
 *  -Address
 *  -Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>        
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
    return (
            /* style here takes CSS differently , they are given using a JS object ( here named styleCard ) */
        <div className="res-card" style={styleCard}>  
            <h3>Meghna Foods</h3>
        </div>
    );
};

const Body =() => {
    return (
        <div className="body">
            <div className="search">Search</div>
                    {/* restraunt card component */}
            <div className="res-container">   {/* since we will use multiple instances of restraunt card component we will create it seaprately */}  
                <RestaurantCard/>
            </div>    
        </div>
    )
}

const AppLayout = () => {
    return ( 
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render( <AppLayout/> ); 



