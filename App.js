import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        name,
        cuisines,
        sla 
    } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}} >
          <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG"
          />
          <h3>{name}</h3>
          <h4>{sla?.deliveryTime}minutes</h4>
          <h4>{cuisines.join(", ")}</h4>
        </div>
    );
};

const resList = [ 
    {
    "id": "426730",
    "name": "Theobroma",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG",
    "locality": "Lavelle Road",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Desserts",
    "Bakery",
    "Beverages"
    ],
    "avgRating": 4.7,
    "parentId": "1040",
    "avgRatingString": "4.7",
    "totalRatingsString": "6.0K+",
    "sla": {
    "deliveryTime": 11,
    "lastMileTravel": 0.4,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "0.4 km",
    "iconType": "ICON_TYPE_EMPTY"
     }
    },
    {
    "id": "426731",
    "name": "Delhi darbar",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG",
    "locality": "Lavelle Road",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Chicken",
    "Kebab",
    "Rolls"
    ],
    "avgRating": 3.7,
    "parentId": "1030",
    "avgRatingString": "4.7",
    "totalRatingsString": "6.0K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 0.4,
    "serviceability": "SERVICEABLE",
    "slaString": "11-15 mins",
    "lastMileTravelString": "0.4 km",
    "iconType": "ICON_TYPE_EMPTY"
     }
    }
];  

const Body =() => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                              {/* Config driven UI */}
                              {/* "restaurant" is defined right here in the map corresponding to the data in resList */}
                {resList.map((restaurant) => (    
                    <RestaurantCard  key={restaurant.id} resData ={restaurant} /> 
                ))}                     {/* ALWAYS GIVE A KEY IN A LOOP IN A MAP*/}
            </div>    
        </div>
    );
};


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
