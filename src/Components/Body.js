import resList from "../Utils/mockData";
import RestCart from "./RestCart";
import { useState } from "react";

const Body = () => {

  //  local state variable - super powerful variables

  const arr = useState(resList);

  // const [restaurantList , setRestaurantList] = arr ;

  const restaurantList=arr[0]
  const setRestaurantList= arr[1]

//normal js variable
  // let resList1 = null ;
  
    


// Normal JS variable

// let list = [];
// list.push('1')

  // let resList2 = [
  //   {
  //     id: "694217",
  //     name: "Sprout'O-Only Healthy Diet",
  //     cloudinaryImageId: "cffb9b6f1d2ebbab95b87658e4a44359",
  //     locality: "Irc village",
  //     areaName: "Jayadev Vihar",
  //     costForTwo: "₹248 for two",
  //     cuisines: ["Healthy Food", "Salads"],
  //     avgRating: 4.2,
  //     totalFee: 3200,
  //   },

  //   {
  //     id: "220360",
  //     name: "Priya",
  //     cloudinaryImageId: "oivksbtnt4ufouny0srf",
  //     locality: "Jaydev Vihar",
  //     areaName: "Jayadev Vihar",
  //     costForTwo: "₹250 for two",
  //     cuisines: ["South Indian", "North Indian", "Tandoor"],
  //     avgRating: 4.1,
  //     veg: true,
  //     totalFee: 2600,
  //   },

  //   {
  //     id: "305733",
  //     name: "Brew Xpresz",
  //     cloudinaryImageId: "havcrzaqwr95js0pukgg",
  //     locality: "Doordarshan Colony",
  //     areaName: "Jayadev Vihar",
  //     costForTwo: "₹300 for two",
  //     cuisines: ["Pizzas", "Pastas", "Beverages"],
  //     avgRating: 3.2,
  //     totalFee: 2600,
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restaurantList.filter((res) => res.avgRating > 4);
            console.log(restaurantList);
            setRestaurantList(filterList)
          }
          
        }
        >
          Top rated restaurant
        </button>
      </div>

      <div className="resContainer">
        {/*not using keys (not acceptable)<<< using index as keys <<< using ids as keys(best pratice)*/}

        {restaurantList.map((res) => {
          return <RestCart key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
