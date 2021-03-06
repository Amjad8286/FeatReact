import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({label, selected ,styleclass, onChange})=>{
    const handleChange = (event) => {
        const {checked} = event.target;
        onChange(checked);

    };

    return(
        <label className='check-form'>
                <input
                    type="checkbox"
                    className='mr-2'
                    value={selected}
                    defaultChecked={selected}
                    onChange={handleChange}/>

                {label}
            </label>
            
    )
};

Checkbox.propTypes = {
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    styleClass: ''
};

export default Checkbox;