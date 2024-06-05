import "../Styles/Header.scss";
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <div>
      <div className="rectangleOne"></div>
      <div className="rectangleTwo"></div>
      <div className="headingTitleContainer">
        <p className="headingTitle">tivoraStudios.</p>
        <img src={logo} alt="tivora logo lower case t and capital S in light pink with a circle around the letters" />
      </div>
      <div className="rectangleThree"></div>
    </div>
  );
};

export default Header;
