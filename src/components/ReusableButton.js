import React from 'react'
import PropTypes from "prop-types";

const ReusableButton = (props) => {

 const {text,className} = props;
 
  return (
    <div>
        <button className={`${className}`}>
            {text}
        </button>
    </div>
  )
}


ReusableButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };

export default ReusableButton