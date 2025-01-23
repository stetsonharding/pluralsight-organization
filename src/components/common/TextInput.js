import React from 'react'
import PropTypes from 'prop-types'

const TextInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input 
      type="text" 
      className="form-control" 
      name={props.name} 
      value={props.value} 
      onChange={props.onChange} 
      placeholder={props.placeholder} />
    </div>
  )
}


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextInput
