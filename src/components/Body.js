import RestaurantCard from "../RestaurantCard";
import resList from "../utils/mockData";

const Body =() => {
    return (
        <div className="body">
            <div className="Filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        console.log("Button clicked")
                    }}    
                >    
                    Top Rated Restaurants
                </button>
            </div>
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

export default Body;