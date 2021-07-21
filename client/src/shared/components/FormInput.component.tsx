import React, { ChangeEvent, FC } from 'react';
import '../styles/FormInput.styles.scss';

interface Props {
  name: string;
  id: string;
  type: string;
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required: boolean;
}

const FormInput: FC<Props> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
