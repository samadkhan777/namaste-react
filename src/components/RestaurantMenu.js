import { useState , useEffect } from "react";
import Shimmmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [] );

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3298197&lng=78.0108872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        
        console.log(json);
        setResInfo(json.data);
    };

    if( resInfo === null ) return <Shimmmer />;

    const {name ,cuisines , costForTwo  } = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info || {}; 

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwo}
            </p>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;