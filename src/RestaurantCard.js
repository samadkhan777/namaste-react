const RestaurantCard = (props) => {
    const { resData } = props;
    
    const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/,f_auto,q_auto,w_660/";
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        sla 
    } = resData.info || {};

    const IMG_URL = IMG_CDN_URL + cloudinaryImageId;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}} >
          <img
            className="res-logo"
            alt="res-logo"
            src= {IMG_URL}  />
          <h3>{name}</h3>
          <h4>{sla?.deliveryTime} minutes</h4>
          <h4>{cuisines?.join(", ") || "Cuisine info not avaliable"}</h4>
        </div>
    );
};
export default RestaurantCard;