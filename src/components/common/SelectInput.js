import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.DefaultOption}</label>
            <select name={props.name} id="select" form={props.form} onChange={props.onChange}>
                {/* Loop through authors here  */}
                {props.options.map(data => {
                    return  <option key={data.id} value={data.id}>{data.name}</option>
                })}
               
            </select>
        </div>
    )
}

SelectInput.propTypes = {
    DefaultOption: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default SelectInput
