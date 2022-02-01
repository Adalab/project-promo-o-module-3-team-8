import GetAvatar from "./GetAvatar";
import Profile from "./Profile";

const Fill = (props) => {

  const handleInput = (ev) => {
    props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
  };

    return(

        <fieldset className={`fill ${props.open ? '' : 'collapsed'}`}>
          <legend
           onClick={props.handleCollapseFn}
            id="fill"
            className="fill__anunc js_collapsable_title_fill js_title_list"
          >
            <div className="fill__anunc--wrapper">
              <i className=" far fa-keyboard fill__anunc--wrapper--icon"></i>
              <h2 className="fill__anunc--wrapper--h2">Rellena</h2>
            </div>
            <i
              className={`fas fa-chevron-down fill__anunc--arrow js-arrow ${props.open ? '' : 'rotate'}`}
            ></i>
          </legend>
          <section className="fill__form js_fill_content">
        
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
             value={props.data.name}
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
              value={props.data.job}
              required
            />
        
          <GetAvatar avatar={props.data.photo} updateAvatar={props.updateAvatar} />
          <Profile avatar={props.data.photo} />
         
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
             value={props.data.email}
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
             value={props.data.phone}
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
             value={props.data.linkedin}
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
             value={props.data.github}
            />
          </section>
        </fieldset>)
 }

 export default Fill;