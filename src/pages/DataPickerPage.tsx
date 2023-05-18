import React, {useState} from 'react';
import DatePicker from '@/components/DataPicker/DataPicker';
import Layout from '@/components/Layout/Layout';


const Example: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Layout title="DataPicker">
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
      </div>
    </Layout>
  );
};

export default Example;
