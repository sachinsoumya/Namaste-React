
import { CDN_URL } from "../Utils/constant";
const RestCart = (props) => {

  
    const {resData} = props;
    const {name , totalFee , areaName,locality,avgRating,cuisines} = resData
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
          <div>Cuisines-{cuisines.join(',')}</div>
          <div>{totalFee}</div>
          <div>{areaName} , {locality}</div>
          <div>Rating - {avgRating}</div>
          
         
          {/* <div>4.5 stars</div>
          <div>38 minutes</div> */}
        </div>
      );
  
    } else {
      return (
        <div>No data</div>
      )
    }
  }

  export default RestCart;