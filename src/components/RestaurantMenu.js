import { useState , useEffect } from "react";
import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; 

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if( resInfo === null ) return <Shimmmer />;

    const itemCards  =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];

    console.log(itemCards);

    return (
        <div>
            <h1>Menu Items</h1>

             <ul>
                {itemCards.map( (item) =>(
                    <li key ={ item.card.info.id }>
                        {item.card.info.name} - ₹{ (item.card.info.price || item.card.info.defaultPrice) /100 } 
                    </li>
                ))}
            </ul>
        
        </div>     
    );
};  

export default RestaurantMenu;