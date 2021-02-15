import React, { FC } from 'react';
import '../styles/CustomButton.styles.scss';

type ButtonType = 'button' | 'submit' | 'reset';
interface Props {
  type: ButtonType;
  inverted: boolean;
  onClick?: () => void;
}

const buttonDefaultProps: Props = {
  inverted: false,
  type: 'button' as ButtonType,
};
interface ButtonFC extends FC<Props> {
  defaultProps: typeof buttonDefaultProps;
}

const CustomButton: ButtonFC = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.defaultProps = buttonDefaultProps;

export default CustomButton;
