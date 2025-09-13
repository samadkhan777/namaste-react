import { useState , useEffect } from "react";
import Shimmmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [] );

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3298197&lng=78.0108872&restaurantId=78973&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        
        setResInfo(json.data);
    };

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