import '../style/Preview.scss';
import ResetButton from './ResetButton';
import CardPreview from './CardPreview';

function Preview(props) {
  return (
    <section className="blueSection">
      <ResetButton handleResetBtn={props.handleResetBtn} />
      <CardPreview data={props.data} />
    </section>
  );
}

export default Preview;
