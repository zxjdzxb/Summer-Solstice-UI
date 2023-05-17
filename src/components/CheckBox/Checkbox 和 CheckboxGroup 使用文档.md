# Checkbox 和 CheckboxGroup 使用文档

本文档提供了使用 Checkbox 和 CheckboxGroup 组件的指南和示例。

## Checkbox 组件

Checkbox 组件用于显示一个单个的多选框。

### 属性

- `checked` (Boolean)：指定多选框的选中状态。
- `value` (String)：多选框选中状态返回的值。
- `label` (String)：显示的文本值。
- `disabled` (Boolean)：是否禁用多选框。
- `beforeChange` (Function)：点击改变前的事件，返回 `false` 可以阻止事件。
- `onChange` (Function)：改变事件，当选中状态发生变化时触发。

### 示例

```tsx
import React, {useState} from 'react';
import Checkbox from './Checkbox';

const Example: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        value="option1"
        label="选项一"
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

```

## CheckboxGroup 组件

CheckboxGroup 组件用于显示多个多选框，并管理它们的选中状态。

### 属性

- `defaultValue` (Array)：指定组件的默认选中值数组。
- `options` (Array)：选项数据，每个选项包含 `label` 和 `value` 字段。
- `optionsKey` (Object)：指定选项数据的 `label` 和 `value` 字段名称，默认为 `{ label: 'label', value: 'value' }`。
- `max` (Number)：可被勾选的多选框的最大数量。
- `min` (Number)：可被勾选的多选框的最小数量。
- `disabled` (Boolean)：是否禁用组。
- `beforeChange` (Function)：点击改变前的事件，返回 `false` 可以阻止事件。
- `onChange` (Function)：改变事件，当选中状态发生变化时触发。

### 示例

```tsx
import React, {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';

const Example: React.FC = () => {
  const options = [
    {label: '选项一', value: 'option1'},
    {label: '选项二', value: 'option2'},
    {label: '选项三', value: 'option3'},
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxGroupChange = (newSelectedValues: string[]) => {
    setSelectedValues(newSelectedValues);
  };

  return (
    <div>
      <CheckboxGroup
        defaultValue={selectedValues}
        options={options}
        onChange={handleCheckboxGroupChange}
      />
    </div>
  );
};
```

以上示例展示了如何使用 Checkbox 和 CheckboxGroup 组件。根据您的需求和具体场景

