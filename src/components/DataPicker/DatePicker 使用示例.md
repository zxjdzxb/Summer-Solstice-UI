## DatePicker 使用示例

以下是一个使用 `DatePicker` 组件的示例代码：

```tsx
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


```

在上述示例中，我们首先导入了 `DatePicker` 组件，并在函数组件内部创建了一个状态 `selectedDate` 来跟踪选中的日期。

在 JSX 内部，我们使用 `DatePicker` 组件，并通过传递相应的 props 来配置其行为。`defaultValue` 属性用于设置初始默认值，`placeholder` 属性用于显示输入框的占位文本。当日期选择发生变化时，`onChange` 属性指定的回调函数会被调用，我们在这个函数内部更新 `selectedDate` 状态。
