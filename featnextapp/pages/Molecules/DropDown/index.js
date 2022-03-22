import React from "react";
import PropTypes from 'prop-types';

const Dropdown = ({value,data,placeholder,styleClass,onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return(
        
            <select
            value={value}
            className="from-control"
            onChange={handleChange}>
                <option value="">{placeholder}</option>
                {
                    data.map((item,key) => (
                        <option
                        key={key}
                        value={item.label}>
                        {item.label}
                        </option>

                    ))
                }
                <option value="">{placeholder}</option>
            </select>
    );
};

Dropdown.prototype = {
    value : PropTypes.string,
    placeholder : PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass : PropTypes.string,
    onChange : PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value : '',
    placeholder : '',
    styleClass : ''
}

export default Dropdown;