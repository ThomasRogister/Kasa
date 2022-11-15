import logoFooter from "../../Assets/img/logoFooter.png";
import textFooter from "../../Assets/img/textFooter.png";
import "../../style/style.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logoFooter} alt="logo kasa" />
        </div>
        <div className="footer__imgText">
          <img src={textFooter} alt="" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
