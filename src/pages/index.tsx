import React, {useState} from 'react';
import s from '@/styles/Home.module.scss';
import Layout from '@/components/Layout/Layout';
import CheckboxGroup from '@/components/CheckBox/CheckboxGroup';

export default function Home() {
  const options = [
    {label: '选项一', value: 'option1'},
    {label: '选项二', value: 'option2'},
    {label: '选项三', value: 'option3'},
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([
    'option1', 'option2'
  ]);

  const handleCheckboxGroupChange = (newSelectedValues: string[]) => {
    setSelectedValues(newSelectedValues);
  };
  return (
    <>
      <Layout title="夏至">
        <div className={s.container}>
          <h1>测试页面</h1>
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
