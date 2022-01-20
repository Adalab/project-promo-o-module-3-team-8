import '../style/Preview.scss';
import ResetButton from './ResetButton';

function Preview(props) {
  return (
    <section className="blueSection">
      {/* PREVIEW 2.1 */}
      <ResetButton handleResetBtn={props.handleResetBtn} />

      {/* PREVIEW  2.2*/}
      <article className="blueSection__article">
        <div className="blueSection__article--group">
          <div className={`rectangle js_rectangle ${props.data.palette}`}></div>
          <h2 className={`title js_preview_title ${props.data.palette}`}>
            {props.data.name || 'Nombre y apellido'}
            {/* {data.name === '' ? 'Nombre y apellidos' : data.name} */}
          </h2>
          <h5 className="subtitle js_preview_subtitle">
            {props.data.job || 'Front-End developer'}
          </h5>
        </div>

        <div className="blueSection__article--photo js__profile-image"></div>

        <ul className="blueSection__article--containerList">
          {/* PREVIEW  2.2.1 */}
          <li className="item">
            <a href={props.data.phone || ''} className="js-phoneIcon">
              <i
                className={`icon fas fa-mobile-alt  js_icon ${props.data.palette}`}
              ></i>
            </a>
          </li>

          <li className="item">
            <a
              href={`mailto:${
                props.data.email || 'email@gmail.com'
              }?Subject=Interesado%20en%20contactar%20contigo`}
              className="js-envelope "
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`icon far fa-envelope js_icon ${props.data.palette}`}
              ></i>
            </a>
          </li>

          <li className="item">
            <a
              href={props.data.linkedin || 'https://es.linkedin.com'}
              className="js-linkedinIcon "
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`icon fab fa-linkedin-in js_icon ${props.data.palette}`}
              ></i>
            </a>
          </li>

          <li className="item">
            <a
              href={props.data.github || 'https://github.com/'}
              className="js-githubIcon "
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`icon fab fa-github-alt js_icon ${props.data.palette}`}
              ></i>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Preview;
