import RestaurantCard from "../RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() => {  

    const [listOfRestaurants , setListOfRestaurant] = useState([]);

    const [filteredListOfRestaurant , setFilteredListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
 
    useEffect(() => {
        fetchData();
    }, []);

     useEffect(() => {
    }, [listOfRestaurants]);
    
     useEffect(() => {
    }, [filteredListOfRestaurant]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3298197&lng=78.0108872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("Full API response:", json);
    
    const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    setListOfRestaurant(restaurants);
    setFilteredListOfRestaurant(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
      return (
        <h1>
            Looks Like you're offline!! Please check your internet connection;
        </h1>
    );

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) : (
        
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter( 
                                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                             );

                             console.log('filter',filteredRestaurant)
                             

                             setFilteredListOfRestaurant(filteredRestaurant);
                        }}
                    >    
                        Search
                    </button>
                </div>
              
              <button  
                className="filter-btn"
                onClick={() => { 
                    const filteredList = listOfRestaurants.filter(  
                       (res) => res.info?.avgRating > 4
                      );   
                      setListOfRestaurant(filteredList);       
                    }}
               >          
                    Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">
                {filteredListOfRestaurant.map((restaurant, index) => (    
                    <Link
                      key={restaurant.info.id || `restaurant-${index}`} 
                      to={"/restaurants/" + restaurant.info.id} 
                    >
                      <RestaurantCard resData={restaurant} />   
                    </Link>
                ))}            
            </div>    
        </div>
    );
};

export default Body;