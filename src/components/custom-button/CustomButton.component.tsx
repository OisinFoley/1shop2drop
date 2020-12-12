import React, { FC } from 'react';
import './CustomButton.styles.scss';

interface Props {
  type: 'button' | 'submit' | 'reset';
}

const CustomButton: FC<Props> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
