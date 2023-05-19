import React, {useState} from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({options, defaultValue, onChange}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
