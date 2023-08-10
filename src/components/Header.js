// import logo from "../utils/Quick Food (6).png";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Solutions</li>
          <li>Products</li>
          <li>Resources</li>
          <li>Contact Us</li>
          <li>.</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
