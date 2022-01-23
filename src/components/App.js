import '../style/App.scss';
import { useState, useEffect } from 'react';
import truthysmall from '../images/logo-truthy-and-the-booleans-40px.jpg';
import truthybig from '../images/logo-truthy-and-the-booleans-50px.jpg';
import defaultAvatar from '../images/user_image.png';
import CallToApi from '../services/CallToApi';
import ls from '../services/localStorage';
import GetAvatar from './GetAvatar';
import Profile from './Profile';

function App() {
  const [dataCard, setDataCard] = useState('');

  const [data, setData] = useState(
    ls.get('lsData', {
      palette: 'palette1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    })
  );

  useEffect(() => {
    ls.set('lsData', data);
  }, [data]);

  // cuando aprendamos componentes refactorizamos
  const [arrowShare, setArrowShare] = useState('collapsed');
  const [rotateShare, setRotateShare] = useState('rotate');

  const [arrowDesign, setArrowDesign] = useState('');
  const [rotateDesign, setRotateDesign] = useState('');

  const [arrowFill, setArrowFill] = useState('collapsed');
  const [rotateFill, setRotateFill] = useState('rotate');

  const handleCollapse = (ev) => {
    if (ev.currentTarget.id === 'design') {
      if (arrowDesign === 'collapsed') {
        setArrowDesign('');
        setRotateDesign('');
      } else {
        setArrowDesign('collapsed');
        setRotateDesign('rotate');
      }
    } else if (ev.currentTarget.id === 'fill') {
      if (arrowFill === 'collapsed') {
        setArrowFill('');
        setRotateFill('');
      } else {
        setArrowFill('collapsed');
        setRotateFill('rotate');
      }
    } else if (ev.currentTarget.id === 'share') {
      if (arrowShare === 'collapsed') {
        setArrowShare('');
        setRotateShare('');
      } else {
        setArrowShare('collapsed');
        setRotateShare('rotate');
      }
    }
  };

  const handleInput = (ev) => {
    const inputChange = ev.currentTarget.name;
    setData({
      ...data,
      [inputChange]: ev.currentTarget.value,
    });
    // if (inputChange === "name") {
    //   setData({
    //     ...data,
    //     name: ev.currentTarget.value,
    //   });
    // } else if (inputChange === "job") {
    //   setData({
    //     ...data,
    //     job: ev.currentTarget.value,
    //   });
    // } else if (inputChange === "email") {
    //   setData({
    //     ...data,
    //     email: ev.currentTarget.value,
    //   });
    // } else if (inputChange === "phone") {
    //   setData({
    //     ...data,
    //     phone: ev.currentTarget.value,
    //   });
    // } else if (inputChange === "linkedin") {
    //   setData({
    //     ...data,
    //     linkedin: ev.currentTarget.value,
    //   });
    // } else if (inputChange === "github") {
    //   setData({
    //     ...data,
    //     github: ev.currentTarget.value,
    //   });
    // }
  };

  // Componente imagen
  const updateAvatar = (avatar) => {
    setData({
      ...data,
      photo: avatar,
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
      photo: '',
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
      {/* Componente foto de perfil */}

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

              <div
                className="blueSection__article--photo js__profile-image"
                style={{
                  backgroundImage: `url(${data.photo || defaultAvatar})`,
                }}
              ></div>

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

          {/* section 3 */}
          <section className="whiteSection">
            {/* section 3.1 */}
            <fieldset className={`design ${arrowDesign}`}>
              <legend
                id="design"
                onClick={handleCollapse}
                className={`design__legend js_collapsable_title_design js_title_list`}
              >
                <div className="design__legend--wrapper">
                  <i className="far fa-object-ungroup design__legend--icon"></i>
                  <h2 className="design__legend--title">Diseña</h2>
                </div>
                <i
                  className={`fas fa-chevron-down design__legend--arrow js-arrow ${rotateDesign}`}
                ></i>
              </legend>
              <div className="design__colors js_design_content">
                <label>Colores</label>
                <ul>
                  {/* section 3.1.1 */}
                  <li className="design__colors--item">
                    <input
                      onChange={handleInput}
                      type="radio"
                      id="palette1"
                      name="palette"
                      defaultValue="palette1"
                      className="checkbox"
                      checked={data.palette === 'palette1'}
                    />
                    <div className="palette palette__first--firstColor"></div>
                    <div className="palette palette__first--secondColor"></div>
                    <div className="palette palette__first--thirdColor"></div>
                  </li>
                  <li className="design__colors--item">
                    <input
                      onChange={handleInput}
                      type="radio"
                      id="palette2"
                      name="palette"
                      defaultValue="palette2"
                      className="checkbox"
                      checked={data.palette === 'palette2'}
                    />
                    <div className="palette palette__second--firstColor"></div>
                    <div className="palette palette__second--secondColor"></div>
                    <div className="palette palette__second--thirdColor"></div>
                  </li>
                  <li className="design__colors--item">
                    <input
                      onChange={handleInput}
                      type="radio"
                      id="palette3"
                      name="palette"
                      defaultValue="palette3"
                      className="checkbox"
                      checked={data.palette === 'palette3'}
                    />
                    <div className="palette palette__third--firstColor"></div>
                    <div className="palette palette__third--secondColor"></div>
                    <div className="palette palette__third--thirdColor"></div>
                  </li>
                </ul>
              </div>
            </fieldset>

            {/* section 3.2 */}
            <fieldset className={`fill ${arrowFill}`}>
              <legend
                onClick={handleCollapse}
                id="fill"
                className="fill__anunc js_collapsable_title_fill js_title_list"
              >
                <div className="fill__anunc--wrapper">
                  <i className=" far fa-keyboard fill__anunc--wrapper--icon"></i>
                  <h2 className="fill__anunc--wrapper--h2">Rellena</h2>
                </div>
                <i
                  className={`fas fa-chevron-down fill__anunc--arrow js-arrow ${rotateFill}`}
                ></i>
              </legend>
              <section className="fill__form js_fill_content">
                {/* section 3.2.1 */}
                <label htmlFor="name" className="fill__form--required">
                  Nombre completo
                </label>
                <input
                  onChange={handleInput}
                  id="name"
                  className="fill__form--input js_name js_input"
                  type="text"
                  placeholder="Ej. Sally Jill"
                  name="name"
                  value={data.name}
                  required
                />

                <label htmlFor="job" className="fill__form--required">
                  Puesto
                </label>

                <input
                  onChange={handleInput}
                  type="text"
                  id="job"
                  name="job"
                  className="fill__form--input js_job js_input"
                  placeholder="Ej. front-end unicorn"
                  value={data.job}
                  required
                />

                <>
                  <GetAvatar avatar={data.photo} updateAvatar={updateAvatar} />
                  <Profile avatar={data.photo} />
                </>

                <label htmlFor="email" className="fill__form--required">
                  Email
                </label>

                <input
                  onChange={handleInput}
                  type="email"
                  className="fill__form--input js_email js_input"
                  id="email"
                  name="email"
                  placeholder="Ej. sally.jill@gmail.com"
                  value={data.email}
                  required
                />

                <label htmlFor="phone" className="fill__form--required">
                  Teléfono
                </label>

                <input
                  onChange={handleInput}
                  type="tel"
                  className="fill__form--input js_phone js_input"
                  id="phone"
                  placeholder=" Ej: 555-55-55-55"
                  name="phone"
                  value={data.phone}
                  href=""
                />

                <label htmlFor="linkedin" className="fill__form--required">
                  LinkedIn
                </label>

                <input
                  onChange={handleInput}
                  type="text"
                  className="fill__form--input js_linkedin js_input"
                  id="linkedin"
                  placeholder=" Ej: linkedin.com/in/sally.hill"
                  value={data.linkedin}
                  name="linkedin"
                />

                <label htmlFor="github" className="fill__form--required">
                  Github
                </label>
                <input
                  onChange={handleInput}
                  type="text"
                  className="fill__form--input js_github js_input"
                  id="github"
                  placeholder=" Ej: @sally-hill"
                  name="github"
                  value={data.github}
                />
              </section>
            </fieldset>

            {/* section 3.3 */}
            <fieldset className={`share ${arrowShare}`}>
              <legend
                onClick={handleCollapse}
                id="share"
                className="share__legend js_collapsable_title_share js_title_list"
              >
                <div className="share__legend--wrapper">
                  <i className="fas fa-share-alt share__legend--icon"></i>
                  <h2 className="share__legend--title">Comparte</h2>
                </div>
                <a>
                  <i
                    className={`fas fa-chevron-down js-arrow ${rotateShare}`}
                  ></i>
                </a>
              </legend>
              <div className="share__button js_share_content">
                <p className="share__button--message js_error_message hidden"></p>

                {/* section 3.3.1 */}
                <button
                  className="share__button--item js_btn_share gray"
                  onClick={handleSharebtn}
                >
                  <i className="far fa-address-card share__button--icon"></i>
                  <span>Crear tarjeta</span>
                </button>
                <div className="share__paragraph js_share_twitter hidden">
                  <h3>La tarjeta ha sido creada:</h3>
                  <a
                    href={dataCard}
                    className="share__paragraph--text js-url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Este es el enlace a tu tarjeta: {dataCard}
                  </a>
                  <div className="share__paragraph--twButton">
                    <a
                      href="https://twitter.com/intent/tweet?text=Os%20comparto%20mi%20tarjeta%20de%20presentaci%C3%B3n%20hecha%20a%20trav%C3%A9s%20de%20la%20app%20web%20%22Awesome%20Profile%20Cards%22%20%20%23HTML%20%23CSS%20%23JS%20%20%23Adalab%20%23WomenInTech"
                      target="_blank"
                      className="share__paragraph--twLink js_tw_button"
                      rel="noreferrer"
                    >
                      <span>Compartir en Twitter</span>
                      <i className="fab fa-twitter share__paragraph--icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </fieldset>
          </section>
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
