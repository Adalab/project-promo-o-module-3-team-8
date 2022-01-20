

const Design = (props) => {
    
    const handleInput = (ev) => {
        props.handleInput(ev.currentTarget.name, ev.currentTarget.value)
        };

 return (
<fieldset className={`design ${props.arrowDesign}`}>
  <legend
    id="design"
    // onClick={handleCollapse}
    className={`design__legend js_collapsable_title_design js_title_list`}
  >

    <div className="design__legend--wrapper">
      <i className="far fa-object-ungroup design__legend--icon"></i>
      <h2 className="design__legend--title">Diseña</h2>
    </div>
    <i
      className={`fas fa-chevron-down design__legend--arrow js-arrow ${props.rotateDesign}`}
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
         checked={props.value === 'palette1'}
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
         checked={props.data.palette === 'palette2'}
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
         checked={props.data.palette === 'palette3'}
        />
        <div className="palette palette__third--firstColor"></div>
        <div className="palette palette__third--secondColor"></div>
        <div className="palette palette__third--thirdColor"></div>
      </li>
    </ul>
  </div>
</fieldset>
)
 }

 export default Design;