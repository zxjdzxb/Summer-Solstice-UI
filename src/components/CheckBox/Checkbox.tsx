import React from 'react';

interface checkboxProps {
  children: string;
  onChange: (e: any) => void;
  checked: boolean;
}

function Checkbox({
                    children,
                    onChange,
                    checked
                  }: checkboxProps) {

  // 用来判断用户是否传入了复选框的文案
  const createText = () => {
    if (typeof children !== 'string') {
      return '';
    }
    return <span>{children}</span>;

  };

  return (
    <div>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      {createText()}
    </div>
  );
}

export default Checkbox;
