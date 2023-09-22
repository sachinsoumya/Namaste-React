import { LOGO_URL } from "../Utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus"

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

 // if no dependency array useEffect is called on every render 
 // if there is an empty dependency array [] then it is called only once.
 // if there is an dependency array then useEffect is called when btnNameReact will be updated.
  useEffect(()=>{
    console.log("use effect")

  },[btnNameReact])

//* custom hook 
  const status = useOnlineStatus();

  

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={`${LOGO_URL}`} alt="Logo" className="logo" />
      </div>

      <div className="nav-container">
        <ul>
          <li>{!status ? "offline" : "online"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
          <button onClick={() => {btnNameReact=="Login" ?setBtnNameReact("Logout"):setBtnNameReact("Login");
           console.log(btnNameReact)

          }}>
            {btnNameReact}

          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
