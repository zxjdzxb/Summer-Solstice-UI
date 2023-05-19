import React from 'react';
import Menu, {MenuItem} from '@/components/Menu/Menu';
import Layout from '@/components/Layout/Layout';

const MenuPage: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      key: 'home',
      label: 'Home',
      link: '/'
    },
    {
      key: 'about',
      label: 'About',
      link: '/about',
      children: [
        {
          key: 'overview',
          label: 'Overview',
          link: '/about/overview'
        },
        {
          key: 'team',
          label: 'Team',
          link: '/about/team'
        }
      ]
    },
    {
      key: 'services',
      label: 'Services',
      link: '/services'
    },
    {
      key: 'contact',
      label: 'Contact',
      link: '/contact'
    }
  ];

  const handleSelect = (selectedKey: string) => {
    console.log('Selected key:', selectedKey);
  };

  const handleClick = (item: MenuItem) => {
    console.log('Clicked item:', item);
  };

  return (
    <div>
      <h1>Menu Page</h1>
      <Layout title={'Menu'}>
        <Menu
          mode="vertical"
          items={menuItems}
          openKeys={['about']}
          router={true}
          selectedKey="/about/team"
          onSelect={handleSelect}
          onClick={handleClick}
        />
      </Layout>
    </div>
  );
};

export default MenuPage;
