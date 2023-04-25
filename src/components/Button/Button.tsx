import React from 'react';
import s from './Button.module.scss';
const classNames = require('classnames');
import Icon from '@/components/Icon';

interface ButtonProps {
  type: string;
  size?: string;
  href?: string;
  icon?: string;
  round?: boolean;
  disabled?: boolean;
  nativeType?: 'button' | 'submit' | 'reset';
  width?: string;
  loading?: boolean; // 是否加
  plain?: boolean; // 是否为朴素按钮
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const ButtonApp: React.FC<ButtonProps> = (props) => {
  // 表单设置了true时，使用父级表单设置的
  const disabled = props.disabled;
  const size = props.size;
  const classes = classNames(props.className, {
    [`${s['btn']}`]: true,
    [`${s[props.type]}`]: props.type,
    disabled: disabled,
    [`${s[props.size ? props.size : '']}`]: props.size,
  });
  const style = {width: props.width};
  const bntIcon = props.loading ? 'loading' : props.icon;
  const onClick = () => {
    if (disabled) {
      return;
    }
    if (props.href) {
      //navigate(props.href)
    } else {
      props.onClick && props.onClick();
    }
  };
  return (<button
      className={classes}
      type={props.nativeType}
      style={style}
      onClick={onClick}
      disabled={disabled}>
      {bntIcon ?
        <Icon name="kings" className="kings"/> : ''
      }
      {props.children}</button>
  );
};
ButtonApp.defaultProps = {
  size: 'normal',
  nativeType: 'button'
};
export default ButtonApp;
