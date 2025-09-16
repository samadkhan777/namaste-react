import { useState , useEffect } from "react";
import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API} from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [] );

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId);
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