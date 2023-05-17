import React from 'react';
import classNames from 'classnames';
import Icon from '@/components/Icon/Icon';
import s from './Button.module.scss';

enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  // 其他类型...
}

interface ButtonProps {
  type: string,
  size?: string,
  href?: string,
  icon?: string,
  round?: boolean,
  disabled?: boolean,
  nativeType?: 'button' | 'submit' | 'reset',
  width?: string,
  loading?: boolean,
  plain?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children?: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {disabled, size, className, type, nativeType, style, onClick, loading, icon, children} = props;

  const classes = classNames(className, {
    [s.btn]: true,
    [s[type]]: type,
    disabled: disabled,
    [s[size ? size : '']]: size,
  });

  const buttonIcon = loading ? 'loading' : icon;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }
    onClick && onClick(e);
  };

  return (
    <button
      className={classes}
      type={nativeType}
      style={style}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonIcon && <Icon name={buttonIcon} className={buttonIcon}/>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'normal',
  nativeType: 'button'
};

export default Button;
