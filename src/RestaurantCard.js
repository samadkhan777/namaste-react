import { CON_URL } from "./utils/constants"; // named import

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
            src= {CON_URL}  />
          <h3>{name}</h3>
          <h4>{sla?.deliveryTime}minutes</h4>
          <h4>{cuisines.join(", ")}</h4>
        </div>
    );
};

export default RestaurantCard;