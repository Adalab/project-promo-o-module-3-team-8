import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/user_image.png';

function GetAvatar(props) {
  const fr = new FileReader();

  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  
  return (
    <>
      <label className="fill__form--required">Imagen de perfil</label>
      <div className="div-container form__item--photo">
        <label className="div-container__patata js__profile-trigger">
          Añadir imagen
          <input
            type="file"
            ref={myFileField}
            className="div-container__button js__profile-upload-btn"
            onChange={uploadImage}
          />
        </label>
        <div
          className="div-container__check js__profile-preview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
