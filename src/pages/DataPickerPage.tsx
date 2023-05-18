import React, {useState} from 'react';
import DatePicker from '@/components/DataPicker/DataPicker';


const Example: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        type="date"
        onChange={handleDateChange}
        placeholder="Select date"
      />
      <br/>
      <DatePicker
        type="datetime-local"
        onChange={handleDateChange}
        placeholder="Select date and time"
      />
      <br/>
      <p>Selected Date: {selectedDate?.toString() || 'None'}</p>
    </div>
  );
};

export default Example;
