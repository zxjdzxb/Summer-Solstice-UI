import React, {useState} from 'react';
import {Button} from '@/components/Button';

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseDrawer = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button size="large" type="primary" onClick={handleToggleDrawer}>Toggle Drawer</Button>
      {isOpen && (
        <div className="drawer">
          <div className="drawer-content">
            {children}
          </div>
          <Button size="large" type="primary" onClick={handleCloseDrawer}>Close Drawer</Button>
        </div>
      )}
    </div>
  );
};

export default Drawer;
