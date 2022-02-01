import truthysmall from '../images/logo-truthy-and-the-booleans-40px.jpg';
import '../style/Footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <small className="copyFooter">Awesome profile-cards &copy; 2021</small>
      <img className="logoFooter" src={truthysmall} alt="Logo Adalab" />
    </footer>
  );
}

export default Footer;
