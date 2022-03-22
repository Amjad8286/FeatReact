import {React,useState } from 'react';
import PropTypes from 'prop-types';
import {validateInput} from '../Utilities/Validator';

const InputField =({value, lable, placeholder, Validators, type , onChange,htmlFor }) => {
    const [error,setError] = useState(false);

    const handleChange = (event) => {
        console.log(Validators,'Validators');
        const {value} = event.target;
        setError(validateInput(Validators,value));
        onChange(value);
    };

    return(
        <div className='form-group'>
            {type === 'textarea' ? (
                <textarea
                    className='from-control'
                    placeholder={placeholder}
                    value={value}
                    defaultValue={value}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    className='from-control'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            )}
            {lable && <label className='form-label' htmlFor={htmlFor}>{lable}</label>}
            {error && <span className='text-danger'>{error.message}</span>}

           
        </div>
    );

}

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: []
};

export default InputField;