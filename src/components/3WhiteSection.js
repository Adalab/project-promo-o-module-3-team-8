import { useState } from 'react';
import Design from './3.1Design';
import Fill from './3.2Fill';
import Share from './3.3Share';

const WhiteSection = (props) => {
  // LOS COLLAPSABLES LOS HACEMOS AQUÍ Y NO EN APP PORQUE SOLO NECESITRAN USARLOS LOS HIJOS DE ESTE COMPONENTE
  // Ahora hay una variable estado que recoge cuál es la sección en la que pinchamos, está design para que salga abierta por defecto
  const [sectionOpen, setSectionOpen] = useState('design');

  // En esta función le da a sectionopen el valor en el que estemos pinchando con el id
  const handleCollapse = (ev) => {
    setSectionOpen(ev.currentTarget.id);
  };

  return (
    <section className="whiteSection">
      {/* Las props que le pasamos es OPEN (que comprueba si sectionopen es design, fill o share (teniendo en cuenta el id de handlecollapse que se hace en el click) ) */}
      {/* la funcion handlecollapse también la mandamos en el prop, he puesto Fn al final de función porque después sino no me acuerdo de si lo que se pasa es el value o la key, y así hay una diferencia entre las dos, aunque sigan teniendo el mismo nombre */}
      <Design
        open={sectionOpen === 'design'}
        data={props.data}
        handleInput={props.handleInput}
        value={props.data.palette}
        handleCollapseFn={handleCollapse}
      />
      <Fill
        open={sectionOpen === 'fill'}
        data={props.data}
        handleInput={props.handleInput}
        handleCollapseFn={handleCollapse}
        updateAvatar={props.updateAvatar}
      />
      <Share
        open={sectionOpen === 'share'}
        handleCollapseFn={handleCollapse}
        handleSharebtn={props.handleSharebtn}
        dataCard={props.dataCard}
        cardLink={props.cardLink}
      />
    </section>
  );
};

export default WhiteSection;
