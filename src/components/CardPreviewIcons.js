function CardPreviewIcons(props) {
  return (
    <li className="item">
      <a href={props.href} className={props.jsClass}>
        <i
          className={`icon ${props.iconClass}  js_icon ${props.data.palette}`}
        ></i>
      </a>
    </li>
  );
}

export default CardPreviewIcons;
