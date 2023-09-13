/** 
 * Header
    *Logo
    *NavIiem  

 * Body
    *Searchbar
    *Restaurant
      *CardItems (ResName , Rating , cuisines , Delivery time etc.)
 * Footer
   *About
   *Links
   *Contact
   *Address

 */
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: "694217",
    name: "Sprout'O-Only Healthy Diet",
    cloudinaryImageId: "cffb9b6f1d2ebbab95b87658e4a44359",
    locality: "Irc village",
    areaName: "Jayadev Vihar",
    costForTwo: "₹248 for two",
    cuisines: ["Healthy Food", "Salads"],
    avgRating: 4.2,
    totalFee: 3200,
  },

  {
    id: "220360",
    name: "Priya",
    cloudinaryImageId: "oivksbtnt4ufouny0srf",
    locality: "Jaydev Vihar",
    areaName: "Jayadev Vihar",
    costForTwo: "₹250 for two",
    cuisines: ["South Indian", "North Indian", "Tandoor"],
    avgRating: 4.1,
    veg: true,
    totalFee: 2600,
  },

  {
    id: "744844",
    name: "Burger King",
    cloudinaryImageId: "aa77cb6fce4d94f3ad4b4e7fb42782db",
    locality: "Pal Heights",
    areaName: "bhubaneswar",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.1,
    totalFee: 2600,
  },

  {
    id: "406241",
    name: "Idli Bhavan",
    cloudinaryImageId: "rhit7qzpegudc8nxlsch",
    locality: "Housing Board Colony",
    areaName: "Baramunda",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.1,
    veg: true,
    totalFee: 3700,
  },

  {
    id: "110185",
    name: "Chapan Bhog",
    cloudinaryImageId: "x6x1srh1d4mlnyppoyvw",
    locality: "Jayadev Vihar Road",
    areaName: "Jayadev Vihar",
    costForTwo: "₹150 for two",
    cuisines: ["Sweets", "Indian", "Desserts"],
    avgRating: 4.2,
    veg: true,
    totalFee: 2600,
  },

  {
    id: "75280",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Nandankanan Road",
    areaName: "Jayadev Vihar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    totalFee: 2600,
  },

  {
    id: "106176",
    name: "South Express",
    cloudinaryImageId: "jkjxqqbfddiqqd5dx10b",
    locality: "Cuttack Road",
    areaName: "Lakshmi Sagar",
    costForTwo: "₹150 for two",
    cuisines: ["Indian", "Chinese", "Tandoor", "South Indian", "Beverages"],
    avgRating: 4,

    totalFee: 4200,
  },

  {
    id: "305733",
    name: "Brew Xpresz",
    cloudinaryImageId: "havcrzaqwr95js0pukgg",
    locality: "Doordarshan Colony",
    areaName: "Jayadev Vihar",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Pastas", "Beverages"],
    avgRating: 3.2,
    totalFee: 2600,
  },

  {
    id: "530520",
    name: "Biryani Home",
    cloudinaryImageId: "v81u2fsevx7hbvqwhvmm",
    locality: "BDA Colony",
    areaName: "Jayadev Vihar",
    costForTwo: "₹249 for two",
    cuisines: ["Biryani", "North Indian", "Indian", "Snacks"],
    avgRating: 3.3,

    totalFee: 2600,
  },

  {
    id: "446804",
    name: "The Good Bowl",
    cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
    locality: "Technology Corridor Rd",
    areaName: "Patia",
    costForTwo: "₹400 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Pastas",
      "Punjabi",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.3,

    totalFee: 4700,
  },

  {
    id: "486363",
    name: "Myfroyoland",
    cloudinaryImageId: "sh9jwbuki80d8l9phwmp",
    locality: "The Pal Heights Mall",
    areaName: "Jayadev Vihar",
    costForTwo: "₹400 for two",
    cuisines: ["Ice Cream", "Desserts", "Snacks"],
    avgRating: 4.3,
    totalFee: 2600,
  },

  {
    id: "72589",
    name: "Jugaad Jn.",
    cloudinaryImageId: "fq1uss75jajmt1oueyla",
    locality: "Kiit Road",
    areaName: "Patia",
    costForTwo: "₹150 for two",
    cuisines: ["North Indian", "Snacks", "Beverages", "Desserts", "Sweets"],
    avgRating: 4.2,
    veg: true,

    totalFee: 4700,
  },

  {
    id: "753759",
    name: "Treat",
    cloudinaryImageId: "c0c441d4e736ba10c128010431e142ba",
    locality: "BDA Colony",
    areaName: "Nayapalli",
    costForTwo: "₹350 for two",
    cuisines: ["Chinese", "Indian", "Biryani"],

    totalFee: 2600,
  },

  {
    id: "94690",
    name: "Shree Kunj Restaurant",
    cloudinaryImageId: "r4rpaumlk63gytmpnsnw",
    locality: "Jayadev Vihar Road",
    areaName: "Jayadev Vihar",
    costForTwo: "₹250 for two",
    cuisines: ["Biryani", "Sweets", "South Indian", "North Indian"],
    avgRating: 4.1,
    totalFee: 2600,
  },

  {
    id: "134941",
    name: "Cafe Coffee Day",
    cloudinaryImageId: "fw5i5katxguqnkdfnanr",
    locality: "Siripur",
    areaName: "Suryanagar",
    costForTwo: "₹300 for two",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food",
    ],
    avgRating: 4.1,
    totalFee: 3700,
  }
]



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
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
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

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search bar</div>

      <div className="resContainer">
{/* <RestCart resData={resList[0]} />
        <RestCart  resData = {resList[1]}/>
        <RestCart  resData = {resList[2]}/>
        <RestCart  resData = {resList[3]}/>
        <RestCart  resData = {resList[4]}/>
        <RestCart  resData = {resList[5]}/>

        <RestCart resData = {resList[6]}/>
        <RestCart resData = {resList[7]}/>
        <RestCart resData = {resList[8]}/>
        <RestCart resData = {resList[9]}/>
        <RestCart resData = {resList[10]}/>
        <RestCart resData = {resList[11]}/>
        <RestCart resData = {resList[12]}/>
        <RestCart resData = {resList[13]}/>
        <RestCart resData = {resList[14]}/> */}

{/*not using keys (not acceptable)<<< using index as keys <<< using ids as keys(best pratice)*/}

      {resList.map((res)=>{
        return <RestCart key={res.id} resData={res} />

        
      })}

        {/* <RestCart />
                <RestCart />
                <RestCart />
                <RestCart />
                <RestCart />
                <RestCart />
                <RestCart />
                <RestCart />
                <RestCart /> */}
      </div>
    </div>
  );
};



const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
