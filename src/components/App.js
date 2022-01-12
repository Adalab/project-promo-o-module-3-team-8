import "../style/App.scss";
import { useState } from "react";
// import logoadalab from '../images/logo-adalab.png';
// import awesomecards from '../images/logo-awesome-profile-cards.svg';
import truthysmall from "../images/logo-truthy-and-the-booleans-40px.jpg";
import truthybig from "../images/logo-truthy-and-the-booleans-50px.jpg";
// import truthytrans from '../images/logo-truthy-and-the-booleans-419px.png';
// import userimage from '../images/user_image.png';

function App() {
  const [data, setData] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const handleInput = (ev) => {
    const inputChange = ev.currentTarget.name;
    if (inputChange === "name") {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (inputChange === "job") {
      setData({
        ...data,
        job: ev.currentTarget.value,
      });
    } else if (inputChange === "email") {
      setData({
        ...data,
        email: ev.currentTarget.value,
      });
    } else if (inputChange === "phone") {
      setData({
        ...data,
        phone: ev.currentTarget.value,
      });
    } else if (inputChange === "linkedin") {
      setData({
        ...data,
        linkedin: ev.currentTarget.value,
      });
    } else if (inputChange === "github") {
      setData({
        ...data,
        github: ev.currentTarget.value,
      });
    }
  };

  return (
    <div className="page">
      <header className="header">
        <a href="./index.html">
          <img className="logoHeader" src={truthybig} alt="Logo APC" />
        </a>
      </header>
      <main>
        <form className="maincontainer" action="#" method="post">
          <section className="blueSection">
            <button
              className="blueSection__reset js_reset"
              type="reset"
              defaultValue="reset"
            >
              <i className="blueSection__reset--icon far fa-trash-alt"></i>Reset
            </button>

            <article className="blueSection__article">
              <div className="blueSection__article--group">
                <div className="rectangle js_rectangle palette1"></div>
                <h2 className="title js_preview_title palette1">
                  {data.name || "Nombre y apellido"}
                  {/* {data.name === '' ? 'Nombre y apellidos' : data.name} */}
                </h2>
                <h5 className="subtitle js_preview_subtitle">
                  {data.job || "Front-End developer"}
                </h5>
              </div>

              <div className="blueSection__article--photo js__profile-image"></div>

              <ul className="blueSection__article--containerList">
                <li className="item">
                  <a href={data.phone || ""} className="js-phoneIcon">
                    <i className="icon fas fa-mobile-alt  js_icon palette1"></i>
                  </a>
                </li>

                <li className="item">
                  <a
                    href={`mailto:${
                      data.email || "email@gmail.com"
                    }?Subject=Interesado%20en%20contactar%20contigo`}
                    className="js-envelope "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon far fa-envelope js_icon palette1"></i>
                  </a>
                </li>

                <li className="item">
                  <a
                    href= {data.linkedin || "https://es.linkedin.com"}
                    className="js-linkedinIcon "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon fab fa-linkedin-in js_icon palette1"></i>
                  </a>
                </li>

                <li className="item">
                  <a
                    href= {data.github || "https://github.com/"}
                    className="js-githubIcon "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon fab fa-github-alt js_icon palette1"></i>
                  </a>
                </li>
              </ul>
            </article>
          </section>
          <section className="whiteSection">
            <fieldset className="design">
              <legend className="design__legend js_collapsable_title_design js_title_list">
                <div className="design__legend--wrapper">
                  <i className="far fa-object-ungroup design__legend--icon"></i>
                  <h2 className="design__legend--title">Diseña</h2>
                </div>
                <i className="fas fa-chevron-down design__legend--arrow js-arrow rotate"></i>
              </legend>
              <div className="design__colors js_design_content">
                <label>Colores</label>
                <ul>
                  <li className="design__colors--item">
                    <input
                      type="radio"
                      id="palette1"
                      name="palette"
                      defaultValue="palette1"
                      className="checkbox"
                      defaultChecked
                    />
                    <div className="palette palette__first--firstColor"></div>
                    <div className="palette palette__first--secondColor"></div>
                    <div className="palette palette__first--thirdColor"></div>
                  </li>
                  <li className="design__colors--item">
                    <input
                      type="radio"
                      id="palette2"
                      name="palette"
                      defaultValue="palette2"
                      className="checkbox"
                    />
                    <div className="palette palette__second--firstColor"></div>
                    <div className="palette palette__second--secondColor"></div>
                    <div className="palette palette__second--thirdColor"></div>
                  </li>
                  <li className="design__colors--item">
                    <input
                      type="radio"
                      id="palette3"
                      name="palette"
                      defaultValue="palette3"
                      className="checkbox"
                    />
                    <div className="palette palette__third--firstColor"></div>
                    <div className="palette palette__third--secondColor"></div>
                    <div className="palette palette__third--thirdColor"></div>
                  </li>
                </ul>
              </div>
            </fieldset>

            <fieldset className="fill">
              <legend className="fill__anunc js_collapsable_title_fill js_title_list">
                <div className="fill__anunc--wrapper">
                  <i className=" far fa-keyboard fill__anunc--wrapper--icon"></i>
                  <h2 className="fill__anunc--wrapper--h2">Rellena</h2>
                </div>
                <i className="fas fa-chevron-down fill__anunc--arrow js-arrow"></i>
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
                  required
                />

                <label htmlFor="" className="fill__form--required">
                  Imagen de perfil
                </label>

                <div className="div-container form__item--photo">
                  <label
                    htmlFor="image"
                    className="div-container__patata js__profile-trigger"
                  >
                    Añadir imagen
                  </label>
                  {/* <input type="file" id="image" name="image"
                                accept="image/png, image/jpeg" defaultValue="Añadir imagen"
                                className="div-container__button js__profile-upload-btn"/> */}
                  <div className="div-container__check js__profile-preview"></div>
                </div>
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
                />
              </section>
            </fieldset>
            <fieldset className="share">
              <legend className="share__legend js_collapsable_title_share js_title_list">
                <div className="share__legend--wrapper">
                  <i className="fas fa-share-alt share__legend--icon"></i>
                  <h2 className="share__legend--title">Comparte</h2>
                </div>
                <a>
                  <i className="fas fa-chevron-down js-arrow"></i>
                </a>
              </legend>
              <div className="share__button js_share_content">
                <p className="share__button--message js_error_message hidden"></p>
                <button className="share__button--item js_btn_share gray">
                  <i className="far fa-address-card share__button--icon"></i>
                  <span>Crear tarjeta</span>
                </button>
                <div className="share__paragraph js_share_twitter hidden">
                  <h3>La tarjeta ha sido creada:</h3>
                  <a
                    href="/"
                    className="share__paragraph--text js-url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Este es el enlace a tu tarjeta
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
      <footer className="footer">
        <small className="copyFooter">Awesome profile-cards &copy; 2021</small>
        <img className="logoFooter" src={truthysmall} alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
