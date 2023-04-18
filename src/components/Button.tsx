import s from './Button.module.scss';
import React, {MouseEventHandler, useMemo, useState} from 'react';

interface Props {
  type: 'submit' | 'reset' | 'button';
  level: 'primary'| 'danger' | 'link';
  disabled: boolean;
  autoSelfDisabled: boolean;
  onClick: (e: React.MouseEvent<Element>) => void;
  children: string
}

export default function Button(props: Props, context: any) {
  const [selfDisabled, setSelfDisabled] = useState(false);
  const _disabled = useMemo(() => {
    if (!props.autoSelfDisabled) {
      return props.disabled;
    }
    if (selfDisabled) {
      return true;
    } else {
      return props.disabled;
    }
  }, [props.disabled, selfDisabled]);
  const onCl: React.MouseEventHandler = (e) => {
    props.onClick?.(e);
    setSelfDisabled(true);
    setTimeout(() => {
      setSelfDisabled(false);
    }, 500);
  };
  return (
    <>
      <div className={s.button}>
        <button disabled={_disabled} type={props.type} className={`${s[props.level]}`} onClick={onCl}>
          {props.children}
        </button>
      </div>
    </>
  );
}
