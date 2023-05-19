import React from 'react';

interface InputProps {
  defaultValue?: string,
  placeholder?: string,
  disabled?: boolean,
  readOnly?: boolean,
  maxLength?: number,
  type?: string,
  width?: string,
  size?: 'large' | 'normal' | 'small' | 'mini',
  prefixIcon?: string,
  suffixIcon?: string,
  prepend?: string | React.ReactNode,
  append?: string | React.ReactNode,
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void,
  onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void,
  value: string
}

const Input: React.FC<InputProps> = ({
                                       defaultValue = '',
                                       placeholder = '',
                                       disabled = false,
                                       readOnly = false,
                                       maxLength,
                                       type = 'text',
                                       width,
                                       size = 'normal',
                                       prefixIcon,
                                       suffixIcon,
                                       prepend,
                                       append,
                                       onChange,
                                       onFocus,
                                       onBlur,
                                       value
                                     }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event.target.value, event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event.target.value, event);
    }
  };

  return (
    <div>
      {prepend && <span>{prepend}</span>}
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        className={`input input-${size}`}
        style={{width}}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {append && <span>{append}</span>}
    </div>
  );
};

export default Input;
