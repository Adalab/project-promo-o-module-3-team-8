import '../style/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import ls from '../services/localStorage';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import Header from './Header';
import Preview from './Preview';
import Footer from './Footer';

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

  const [arrowShare, setArrowShare] = useState('collapsed');
  const [rotateShare, setRotateShare] = useState('rotate');

  const [arrowDesign, setArrowDesign] = useState('');
  const [rotateDesign, setRotateDesign] = useState('');

  const [arrowFill, setArrowFill] = useState('collapsed');
  const [rotateFill, setRotateFill] = useState('rotate');

  const [cardLink, setCardLink] = useState('hidden');

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
  };

  // Componente imagen
  const updateAvatar = (avatar) => {
    setData({
      ...data,
      photo: avatar,
    });
  };

  // Reset button
  const handleResetBtn = () => {
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
      setDataCard(dataCard.cardURL);
    });
  };

  return (
    <div className="page">
      <Header />
      <main>
        <form className="maincontainer" action="#" method="post">
          <Preview data={data} handleResetBtn={handleResetBtn} />

          {/* section 3 */}
          <section className="whiteSection">
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
                <label htmlFor="name" className="fill__form--required">
                  Nombre completo
                </label>

                {/* FORMULARIO */}

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
                <p className="share__button--message js_error_message hidden">
                  Por favor, rellena todos los campos
                </p>

                {/* section 3.3.1 */}
                <button
                  className="share__button--item js_btn_share gray"
                  onClick={handleSharebtn}
                >
                  <i className="far fa-address-card share__button--icon"></i>
                  <span>Crear tarjeta</span>
                </button>
                <div
                  className={`share__paragraph js_share_twitter ${cardLink}`}
                >
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
      <Footer />
    </div>
  );
}

export default App;
