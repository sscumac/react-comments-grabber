import PropTypes from 'prop-types'
import '../component-styles/Button.css'

const Button = ({bcolor, color, text, height, onClick}) => { /* setting props for the button component*/
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: bcolor, height: height, color: color }} /*double {}: inner {} in style holds an object*/
      className="btn"
    >
      {text}
    </button> )
}

Button.propTypes = {
  text: PropTypes.string,
  bcolor: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
}

export default Button
