import CardPreviewIcons from './CardPreviewIcons';
import defaultAvatar from '../images/user_image.png';
import '../style/Preview.scss';

function CardPreview(props) {
  return (
    <article className="blueSection__article">
      <div className="blueSection__article--group">
        <div className={`rectangle js_rectangle ${props.data.palette}`}></div>
        <h2 className={`title js_preview_title ${props.data.palette}`}>
          {props.data.name || 'Nombre y apellido'}
        </h2>
        <h5 className="subtitle js_preview_subtitle">
          {props.data.job || 'Front-End developer'}
        </h5>
      </div>

      <div
        className="blueSection__article--photo js__profile-image"
        style={{
          backgroundImage: `url(${props.data.photo || defaultAvatar})`,
        }}
      ></div>

      <ul className="blueSection__article--containerList">
        <CardPreviewIcons
          data={props.data}
          href={props.data.phone || ''}
          iconClass="fas fa-mobile-alt"
          jsClass="js-phoneIcon"
        />
        <CardPreviewIcons
          data={props.data}
          href={`mailto:${
            props.data.email || 'email@gmail.com'
          }?Subject=Interesado%20en%20contactar%20contigo`}
          iconClass="far fa-envelope"
          jsClass="js-envelope"
        />
        <CardPreviewIcons
          data={props.data}
          href={props.data.linkedin || 'https://es.linkedin.com'}
          iconClass="fab fa-linkedin-in"
          jsClass="js-linkedinIcon"
        />
        <CardPreviewIcons
          data={props.data}
          href={props.data.github || 'https://github.com/'}
          iconClass="fab fa-github-alt"
          jsClass="js-githubIcon"
        />
      </ul>
    </article>
  );
}

export default CardPreview;
