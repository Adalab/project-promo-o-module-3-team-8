import Design from './3.1Design';
import Fill from './3.2Fill';
import Share from './3.3Share';


const WhiteSection = (props) => {

return (
<section className="whiteSection">
<Design data={props.data} handleInput={props.handleInput} 
value={props.data.palette}/>
<Fill />
<Share/>
</section>
)}

export default WhiteSection;