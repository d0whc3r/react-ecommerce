import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss';

interface FormInputProps {
  label?: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label htmlFor={otherProps.name} className={[otherProps.value ? 'shrink' : false, 'form-input-label'].filter(Boolean).join(' ')}>
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default FormInput;
