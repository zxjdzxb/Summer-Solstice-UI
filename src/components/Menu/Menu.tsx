import React from 'react';

export interface MenuItem {
  key: string;
  label: string;
  link?: string;
  children?: MenuItem[];
}

interface MenuProps {
  mode?: 'vertical' | 'horizontal';
  collapse?: boolean;
  items: MenuItem[];
  trigger?: 'hover' | 'click';
  theme?: 'light' | 'dark';
  style?: React.CSSProperties;
  liHeight?: number;
  openKeys?: string[];
  router?: boolean;
  selectedKey?: string;
  onSelect?: (selectedKey: string) => void;
  onClick?: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({
                                     mode = 'vertical',
                                     collapse = false,
                                     items,
                                     trigger = 'hover',
                                     theme = 'light',
                                     style,
                                     liHeight,
                                     openKeys,
                                     router = false,
                                     selectedKey,
                                     onSelect,
                                     onClick
                                   }) => {
  const handleSelect = (key: string) => {
    if (onSelect) {
      onSelect(key);
    }
  };

  const handleClick = (item: MenuItem) => {
    if (onClick) {
      onClick(item);
    }
  };

  const renderSubMenu = (item: MenuItem) => {
    if (item.children) {
      return (
        <Menu
          mode="vertical"
          items={item.children}
          openKeys={openKeys}
          router={router}
          selectedKey={selectedKey}
          onSelect={onSelect}
          onClick={onClick}
        />
      );
    }

    return null;
  };

  return (
    <ul
      className={`menu menu-${mode} ${collapse ? 'menu-collapse' : ''} ${theme === 'dark' ? 'menu-dark' : ''}`}
      style={style}
    >
      {items.map((item) => (
        <li
          key={item.key}
          style={liHeight ? {height: `${liHeight}px`} : undefined}
          className={`${router && item.link === selectedKey ? 'menu-active' : ''}`}
        >
          {router ? (
            <a href={item.link} onClick={() => handleClick(item)}>
              {item.label}
            </a>
          ) : (
            <span onClick={() => handleClick(item)}>{item.label}</span>
          )}
          {renderSubMenu(item)}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
