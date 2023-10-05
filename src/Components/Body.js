import resList from "../Utils/mockData";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestCart from "./RestCart";
import { withDiscountedLabel } from "./RestCart";
import { useEffect, useState , useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

const Body = () => {
  //  local state variable - super powerful variables

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedinUser , setUserInfo } = useContext(UserContext);

  //whenever state variable changes react triggers reconciliation cycle(It rerebders the componenet)

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Hello");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.46789512067949&lng=86.87785673886538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );

    setFilteredRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle
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

  const RescartDiscount = withDiscountedLabel(RestCart);

  if (status === false)
    return <h1>Oopps...check your internet connection and try again</h1>;

  return restaurantList.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="border-b-4 border-indigo-500 m-4 w-60"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="rounded-full mx-5 bg-yellow-500 hover:bg-yellow-700 p-3 w-24"
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
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-3"
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

        <label htmlFor="uname" className="mx-3">User Name</label>

        <input type="text" id="uname" className="w-50 mx-5 p-1 border border-yellow-600" value={loggedinUser} onChange={(e)=>setUserInfo(e.target.value)} />
      </div>

      <div className="flex flex-wrap justify-evenly">
        {/*not using keys (not acceptable)<<< using index as keys <<< using ids as keys(best pratice)*/}

        {filteredRes.map((res) => {
          return (
            <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
              {res.info.aggregatedDiscountInfoV3 !== undefined ? (
                <RescartDiscount resData={res.info} />
              ) : (
                <RestCart resData={res.info} />
              )}

              {console.log(res.info.aggregatedDiscountInfoV3)}
              {/* <RestCart resData={res.info} /> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
