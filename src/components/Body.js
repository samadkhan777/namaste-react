import RestaurantCard from "../RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body =() => {  

    const [listOfRestaurants , setListOfRestaurant] = useState(resList);
 
    return (
        <div className="body">
            <div className="filter">
              <button  
                className="filter-btn"
                onClick={() => { 
                    const filteredList = listOfRestaurants.filter(  
                       (res) => res.avgRating > 4
                      );   
                      setListOfRestaurant(filteredList);       
                    }}
               >          
                    Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">
                              {/* Config driven UI */}
                              {/* "restaurant" is defined right here in the map corresponding to the data in resList */}
                {listOfRestaurants.map((restaurant) => (    
                    <RestaurantCard  key={restaurant.id} resData ={restaurant} /> 
                ))}                     {/* ALWAYS GIVE A KEY IN A LOOP IN A MAP*/}
            </div>    
        </div>
    );
};

export default Body;