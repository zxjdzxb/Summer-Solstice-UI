import React, {useState} from 'react';
import s from '@/styles/Home.module.scss';
import Layout from '@/components/Layout/Layout';
import CheckboxGroup from '@/components/CheckBox/CheckboxGroup';

export default function Home() {
  const options = [
    {label: '选项一', value: 'option1'},
    {label: '选项二', value: 'option2'},
    {label: '选项三', value: 'option3'},
    {label: '选项四', value: 'option4'},
    {label: '选项五', value: 'option5'},
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([
    'option1', 'option2', 'option4'
  ]);

  const handleCheckboxGroupChange = (newSelectedValues: string[]) => {
    setSelectedValues(newSelectedValues);
  };
  return (
    <>
      <Layout title="Checkbox">
        <div className={s.container}>
          <div>
            <CheckboxGroup
              defaultValue={selectedValues}
              options={options}
              onChange={handleCheckboxGroupChange}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
