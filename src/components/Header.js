import truthybig from '../images/logo-truthy-and-the-booleans-50px.jpg';
import '../style/Header.scss';

function Header() {
  return (
    <header className="header">
      <a href="./index.html">
        <img className="logoHeader" src={truthybig} alt="Logo APC" />
      </a>
    </header>
  );
}

export default Header;
