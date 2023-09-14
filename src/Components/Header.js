
import { LOGO_URL } from "../Utils/constant";
const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img
            src={`${LOGO_URL}`}
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

  export default Header;