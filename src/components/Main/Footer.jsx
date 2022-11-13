import logoFooter from "../../Assets/img/logoFooter.png";
import textFooter from "../../Assets/img/textFooter.png";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="logoFooter">
          <img src={logoFooter} alt="logo kasa" />
        </div>
        <div className="textFooter">
          <img src={textFooter} alt="droit kasa" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
