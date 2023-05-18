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


  const formatToLocalDateString = (date: Date | null): string => {
    if (!date) return '';
    return date.toLocaleDateString();
  };

  const formatToLocalDateTimeString = (date: Date | null): string => {
    if (!date) return '';
    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC', // Set the time zone to 'UTC'
    });
  };

  return (
    <div>
      <input
        type={inputType}
        value={selectedDate ? (type === 'date' ? selectedDate.toISOString().substr(0, 10) : selectedDate.toISOString().substr(0, 16)) : ''}
        placeholder={placeholder}
        onChange={handleDateChange}
        disabled={disabled}
        readOnly={readonly}
      />
      <p>
        Selected Date:{' '}
        {type === 'date' ? formatToLocalDateString(selectedDate) : formatToLocalDateTimeString(selectedDate) || 'None'}
      </p>
    </div>
  );
};

export default DatePicker;
