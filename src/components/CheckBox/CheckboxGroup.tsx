import React, {useState} from 'react';
import Checkbox from '@/components/CheckBox/Checkbox';

interface CheckboxOption {
  label: string;
  value: string;

  [key: string]: string; // 添加索引签名
}

interface CheckboxGroupProps {
  defaultValue?: string[];
  options: CheckboxOption[];
  optionsKey?: {
    label: string;
    value: string;
  };
  max?: number;
  min?: number;
  disabled?: boolean;
  beforeChange?: () => boolean;
  onChange?: (selectedValues: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
                                                       defaultValue = [],
                                                       options,
                                                       optionsKey = {label: 'label', value: 'value'},
                                                       max,
                                                       min,
                                                       disabled = false,
                                                       beforeChange,
                                                       onChange,
                                                     }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (beforeChange && !beforeChange()) {
      return; // 阻止事件
    }

    let updatedValues: string[];

    if (checked) {
      if (max && selectedValues.length >= max) {
        return; // 达到最大选项数量，阻止选择
      }

      updatedValues = [...selectedValues, value];
    } else {
      if (min && selectedValues.length <= min) {
        return; // 达到最小选项数量，阻止取消选择
      }

      updatedValues = selectedValues.filter((val) => val !== value);
    }

    setSelectedValues(updatedValues);

    if (onChange) {
      onChange(updatedValues);
    }
  };

  const toggleSelect = (selectAll: boolean) => {
    if (beforeChange && !beforeChange()) {
      return; // 阻止事件
    }

    const updatedValues = selectAll ? options.map((option) => option[optionsKey.value]) : [];

    setSelectedValues(updatedValues);

    if (onChange) {
      onChange(updatedValues);
    }
  };

  const getValue = () => {
    return selectedValues;
  };

  return (
    <div>
      {options.map((option) => (
        <Checkbox
          key={option[optionsKey.value]}
          value={option[optionsKey.value]}
          label={option[optionsKey.label]}
          checked={selectedValues.includes(option[optionsKey.value])}
          disabled={disabled}
          beforeChange={beforeChange}
          onChange={(checked) => handleCheckboxChange(option[optionsKey.value], checked)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
