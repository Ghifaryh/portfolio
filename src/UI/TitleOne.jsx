import PropTypes from "prop-types"
import "./Ui.css"

export default function TitleOne({
  className = "",
  titleSm = "",
  title = "",
  titleEx = "",
}) {
  return (
    <div className={`titleOne ${className}`}>
      <small>{titleSm}</small>
      <h2>
        {title} <span>{titleEx}</span>{" "}
      </h2>
    </div>
  )
}

TitleOne.propTypes = {
  className: PropTypes.string,
  titleSm: PropTypes.string,
  title: PropTypes.string,
  titleEx: PropTypes.string,
}
