import { CDN_URL } from "../Utils/constant";


const RestCart = (props) => {
  const { resData } = props;
  const {
    name,
    feeDetails,
    areaName,
    locality,
    avgRating,
    cuisines,
    sla,
    availability,
    
  } = resData;
  // console.log(resData.name);





  if (resData) {
    return (
      <div className="res-card">
        <h3>{resData.name}</h3>
        <img
          className="res-logo"
          src={`${CDN_URL}/${resData.cloudinaryImageId}`}
          alt="Meghnafoods"
        />
        <div>{name}</div>
        <div>Cuisines-{cuisines.join(",")}</div>
        <div>{feeDetails.totalFee}</div>
        <div>
          {areaName} , {locality}
        </div>
        <div>{sla.deliveryTime}</div>
        <div>Open -{`${availability.opened}` ? `yes` : `No`} </div>
        <div>Close at -{availability.nextCloseTime}</div>
        <div>Rating - {avgRating}</div>

        {/* <div>4.5 stars</div>
          <div>38 minutes</div> */}
      </div>
    );
  } else {
    return <div>No data</div>;
  }
};

export default RestCart;
