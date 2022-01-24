function ResetButton(props) {
  const handleChangeResetBtn = (ev) => {
    ev.preventDefault();
    props.handleResetBtn();
  };

  return (
    <button
      className="blueSection__reset js_reset"
      type="reset"
      defaultValue="reset"
      onClick={handleChangeResetBtn}
    >
      <i className="blueSection__reset--icon far fa-trash-alt"></i>Reset
    </button>
  );
}

export default ResetButton;
