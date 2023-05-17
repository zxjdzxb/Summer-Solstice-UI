# Dialog 使用文档

Dialog 组件用于展示一个对话框，可以用于弹出提示、确认框等场景。

## 属性

- `visible` (boolean)：指定对话框的可见状态。
- `onClose` (function)：关闭对话框的回调函数。
- `children` (ReactNode)：对话框内容。
- `closeOnClickMask` (boolean, 可选)：是否允许点击遮罩层关闭对话框，默认为 `false`。

## 示例

以下是使用 Dialog 组件的示例代码：

```tsx
import React, {useState} from 'react';
import Dialog from '@/components/Dialog/Dialog';
import Button from '@/components/Button/Button';

const Example: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={showDialog}>打开对话框</Button>
      <Dialog visible={visible} onClose={closeDialog} closeOnClickMask>
        <p>这是一个示例对话框</p>
        <Button onClick={closeDialog}>关闭对话框</Button>
      </Dialog>
    </div>
  );
};

export default Example;
```

在上面的示例中，我们使用了 `Dialog` 组件来展示一个对话框。点击 "打开对话框" 按钮时，对话框将显示出来。点击对话框中的 "
关闭对话框" 按钮或点击遮罩层时，对话框将关闭。

注意：您需要根据实际情况将组件的导入路径和按钮的点击事件处理逻辑进行相应的修改。

## 属性定制

您可以根据需要使用自定义的按钮和内容来定制 Dialog 组件。通过传递合适的 `children` 属性，您可以在对话框中放置任意的 React
元素和组件。

```tsx
import React, {useState} from 'react';
import Dialog from '@/components/Dialog/Dialog';
import CustomButton from '@/components/CustomButton/CustomButton';

const Example: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
  };

  return (
    <div>
      <CustomButton onClick={showDialog}>打开对话框</CustomButton>
      <Dialog visible={visible} onClose={closeDialog} closeOnClickMask>
        <h2>自定义对话框</h2>
        <p>这是一个自定义的对话框组件</p>
        <CustomButton onClick={closeDialog}>关闭对话框</CustomButton>
      </Dialog>
    </div>
  );
};

export default Example;
```

在上面的示例中，我们使用了一个名为 `CustomButton` 的自定义按钮组件，并将其放置在对话框中。您可以根据需要替换为您自己的自定义组件。
