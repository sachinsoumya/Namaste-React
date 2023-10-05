import { LOGO_URL } from "../Utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array useEffect is called on every render
  // if there is an empty dependency array [] then it is called only once.
  // if there is an dependency array then useEffect is called when btnNameReact will be updated.
  useEffect(() => {
    console.log("use effect");
  }, [btnNameReact]);

  //* custom hook
  const status = useOnlineStatus();

  const { loggedinUser } = useContext(UserContext);
  console.log({ loggedinUser });

  //Subscribing the store using the selector

  const cart = useSelector((store) => store.cart.items);

  console.log(cart);

  return (
    <div className="flex justify-between bg-pink-400 shadow-lg flex-wrap sm:bg-yellow-50 lg:bg-green-50">
      <div className="logoContainer">
        <img
          src={`${LOGO_URL}`}
          alt="Logo"
          className="w-28 rounded-full my-3"
        />
      </div>

      <div className="nav-container">
        <ul className="flex items-center p-4 m-4">
          <li className="pr-3">{!status ? "offline" : "online"}</li>
          <li className="pr-3">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-3">
            <Link to="/about">About us</Link>
          </li>
          <li className="pr-3">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="pr-3">
            <Link to="/grocessary">Grocessary</Link>
          </li>
          <li className="pr-3 font-bold text-xl">
            <Link to="/cart">Cart({cart.length}items)</Link>{" "}
          </li>
          <button
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-3 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
