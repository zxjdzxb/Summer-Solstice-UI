import React from 'react';
import Select, {SelectOption} from '@/components/Select/Select';
import Layout from '@/components/Layout/Layout';


const SelectExample: React.FC = () => {
  const options: SelectOption[] = [
    {value: 'apple', label: 'Apple'},
    {value: 'banana', label: 'Banana'},
    {value: 'orange', label: 'Orange'},
    {value: 'grape', label: 'Grape'}
  ];

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Layout title={'Select'}>
      <h1>Select Example</h1>
      <Select options={options} defaultValue="banana" onChange={handleSelectChange}/>
    </Layout>
  );
};

export default SelectExample;
