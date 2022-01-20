import '../style/App.scss';
import { useState, useEffect } from 'react';
import truthysmall from '../images/logo-truthy-and-the-booleans-40px.jpg';
import truthybig from '../images/logo-truthy-and-the-booleans-50px.jpg';
import CallToApi from '../service/CallToApi';
import WhiteSection from './3WhiteSection';

function App() {
  const [dataCard, setDataCard] = useState('');

  const [data, setData] = useState({
    palette: 'palette1',
    name: '',
    job: '',
    photo: { truthybig },
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });

  const handleInput = (name, value) => {
    const inputChange = name;
    setData({
      ...data,
      [inputChange]: value,
    });
  };

  //al ser Reac y estar en V.E no es necesario volver a repintar, Reac se encarga solito.
  const handleResetBtn = (ev) => {
    ev.preventDefault();
    setData({
      palette: 'palette1',
      name: '',
      job: '',
      email: '',
      photo: { truthybig },
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  // Fetch y Botón de compartir
  const handleSharebtn = (ev) => {
    ev.preventDefault();
    CallToApi(data).then((dataCard) => {
      setDataCard(dataCard.cardUrl);
    });
  };

  return (
    <div className="page">
      {/* HEADER 1 */}
      <header className="header">
        <a href="./index.html">
          <img className="logoHeader" src={truthybig} alt="Logo APC" />
        </a>
      </header>
      <main>
        <form className="maincontainer" action="#" method="post">
          <section className="blueSection">
            {/* PREVIEW 2.1 */}
            <button
              className="blueSection__reset js_reset"
              type="reset"
              defaultValue="reset"
              onClick={handleResetBtn}
            >
              <i className="blueSection__reset--icon far fa-trash-alt"></i>Reset
            </button>

            {/* PREVIEW  2.2*/}
            <article className="blueSection__article">
              <div className="blueSection__article--group">
                <div className={`rectangle js_rectangle ${data.palette}`}></div>
                <h2 className={`title js_preview_title ${data.palette}`}>
                  {data.name || 'Nombre y apellido'}
                  {/* {data.name === '' ? 'Nombre y apellidos' : data.name} */}
                </h2>
                <h5 className="subtitle js_preview_subtitle">
                  {data.job || 'Front-End developer'}
                </h5>
              </div>

              <div className="blueSection__article--photo js__profile-image"></div>

              <ul className="blueSection__article--containerList">
                {/* PREVIEW  2.2.1 */}
                <li className="item">
                  <a href={data.phone || ''} className="js-phoneIcon">
                    <i
                      className={`icon fas fa-mobile-alt  js_icon ${data.palette}`}
                    ></i>
                  </a>
                </li>

                <li className="item">
                  <a
                    href={`mailto:${
                      data.email || 'email@gmail.com'
                    }?Subject=Interesado%20en%20contactar%20contigo`}
                    className="js-envelope "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`icon far fa-envelope js_icon ${data.palette}`}
                    ></i>
                  </a>
                </li>

                <li className="item">
                  <a
                    href={data.linkedin || 'https://es.linkedin.com'}
                    className="js-linkedinIcon "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`icon fab fa-linkedin-in js_icon ${data.palette}`}
                    ></i>
                  </a>
                </li>

                <li className="item">
                  <a
                    href={data.github || 'https://github.com/'}
                    className="js-githubIcon "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`icon fab fa-github-alt js_icon ${data.palette}`}
                    ></i>
                  </a>
                </li>
              </ul>
            </article>
          </section>

          <WhiteSection
            data={data}
            handleInput={handleInput}
            //  value={}
          />
        </form>
      </main>

      {/* FOOTER 4*/}
      <footer className="footer">
        <small className="copyFooter">Awesome profile-cards &copy; 2021</small>
        <img className="logoFooter" src={truthysmall} alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
