import React from 'react';

interface CheckboxProps {
  checked: boolean;
  value: string;
  label: string;
  disabled?: boolean;
  beforeChange?: () => boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
                                             checked,
                                             value,
                                             label,
                                             disabled = false,
                                             beforeChange,
                                             onChange,
                                           }) => {
  const handleChange = () => {
    if (beforeChange && !beforeChange()) {
      return; // 阻止事件
    }

    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label>
      <input type="checkbox" checked={checked} value={value} disabled={disabled} onChange={handleChange}/>
      {label}
    </label>
  );
};

export default Checkbox;
