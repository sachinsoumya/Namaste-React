import resList from "../Utils/mockData";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestCart from "./RestCart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  //  local state variable - super powerful variables

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  //whenever state variable changes react triggers reconciliation cycle(It rerebders the componenet)

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Hello");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=21.46789512067949&lng=86.87785673886538"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json.data.success.cards[3].gridWidget.gridElements.infoWithStyle
        .restaurants
    );

    setFilteredRes(
      json.data.success.cards[3].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    // console.log(restaurantList);
  };
  //conditional rendering
  // if (restaurantList.length === 0) {
  //   return <div>Loading...</div>;
  // }

  // const [restaurantList , setRestaurantList] = arr ;

  const status = useOnlineStatus();

  if (status === false)
    return <h1>Oopps...check your internet connection and try again</h1>;

  return restaurantList.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="searchbox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurant);

            setFilteredRes(filteredRestaurant);

            console.log(restaurantList);

            //filter the card and upadte the UI
          }}
        >
          search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(restaurantList);
            setFilteredRes(filterList);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="resContainer">
        {/*not using keys (not acceptable)<<< using index as keys <<< using ids as keys(best pratice)*/}

        {filteredRes.map((res) => {
          return (
            <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
              <RestCart resData={res.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
