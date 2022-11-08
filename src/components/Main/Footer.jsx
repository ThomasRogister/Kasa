import logoFooter from "../../Assets/img/logoFooter.png";
import textFooter from "../../Assets/img/textFooter.png";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerlogoText">
        <img className="logoFooter" src={logoFooter} alt="logo kasa" />
        <img className="textFooter" src={textFooter} alt="droit kasa" />
      </div>
    </footer>
  );
}
export default Footer;
