import PropTypes from 'prop-types'

const Button = ({color, text, height, onClick}) => { /* setting two props for the button component*/
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: color, height: height }} /*double {}: inner {} in style holds an object*/
      className="btn"
    >
      {text}
    </button> )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
