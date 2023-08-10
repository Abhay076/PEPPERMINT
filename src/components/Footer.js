import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="text">
        <h4>Aubotz Labs Pvt Ltd</h4>
        <h4>CIN: U29100MH2019PTC324975</h4>
      </div>
      <div className="add">
        <p>
          Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji Chowk,
          Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021
        </p>
        <p>info@getpeppermint.co</p>
        <p>+91 89567 10044</p>
      </div>
      <div className="links">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>FAQs</li>
          <li>Case Studies</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="links-right">
        <h3>Recent Posts</h3>
        <ul>
          <li>
             <a > Elevating Efficiency: Evolution of Material Handling with AMRs</a>
          </li>
          <li>
           <a> Autonomous Mobile Robots: The Future of Efficient Material Handling</a>
          </li>
          <li>
             <a > Robotic Floor Scrubbers – The Future of Autonomous Cleaning at
            Airports</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
