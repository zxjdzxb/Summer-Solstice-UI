import React, {useState} from 'react';

export interface DatePickerProps {
  defaultValue?: string;
  placeholder?: string;
  clear?: boolean;
  disabledDate?: (date: Date) => boolean;
  disabled?: boolean;
  type?: 'date' | 'datetime-local';
  format?: string;
  innerText?: (date: Date) => string;
  appendToBody?: boolean;
  downStyle?: React.CSSProperties;
  downClass?: string;
  readonly?: boolean;
  size?: string;
  onChange?: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
                                                 defaultValue,
                                                 placeholder,
                                                 clear,
                                                 disabledDate,
                                                 disabled,
                                                 type,
                                                 format,
                                                 innerText,
                                                 appendToBody,
                                                 downStyle,
                                                 downClass,
                                                 readonly,
                                                 size,
                                                 onChange,
                                               }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    defaultValue ? new Date(defaultValue) : null
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    onChange && onChange(date);
  };

  const inputType = type === 'datetime-local' ? 'datetime-local' : 'date';

  return (
    <input
      type={inputType}
      value={selectedDate ? selectedDate.toISOString().substr(0, 16) : ''}
      placeholder={placeholder}
      onChange={handleDateChange}
      disabled={disabled}
      readOnly={readonly}
    />
  );
};

export default DatePicker;
