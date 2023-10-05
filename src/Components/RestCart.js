import { useContext } from "react";
import { CDN_URL } from "../Utils/constant";
import UserContext from "../Utils/UserContext";


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


  const {loggedinUser} = useContext(UserContext)
  // console.log(resData.name);





  if (resData) {
    return (
      <div className="res-card w-56  border border-black hover:border-t-4 text-blue-600 p-3 h-100 mt-6 text-left bg-slate-200  hover:bg-orange-300 rounded-lg drop-shadow-lg">
      
        <img
          className="res-logo w-56 rounded-lg "
          src={`${CDN_URL}/${resData.cloudinaryImageId}`}
          alt="Meghnafoods"
        />
        <div className="font-semibold py-3">{name}</div>
        <div>Cuisines-{cuisines.join(",")}</div>
        <div>{feeDetails.totalFee}</div>
        <div>
          {areaName} , {locality}
        </div>
        <div>{sla.deliveryTime}</div>
        <div>Open -{`${availability.opened}` ? `yes` : `No`} </div>
        <div>Close at -{availability.nextCloseTime}</div>
        <div>Rating - {avgRating}</div>
        <div>{loggedinUser}</div>

        {/* <div>4.5 stars</div>
          <div>38 minutes</div> */}
      </div>
    );
  } else {
    return <div>No data</div>;
  }
};


export const withDiscountedLabel = (ResCart)=>{
  return (props)=>{
    const {resData} = props;

    return (
      <div>
        <label className="bg-black border-rounded text-white">{resData.aggregatedDiscountInfoV3.header}</label>
        {/* <div className="absolute">{resData.aggregatedDiscountInfoV3.subHeader}</div> */}
        
        <ResCart {...props}/>
        {/* {console.log({...props})}
        {console.log(props)} */}
      </div>
    )

  }

  
}

//* Higher order component 

//* input => ResCart 

export default RestCart;
