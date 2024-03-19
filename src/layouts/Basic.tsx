import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';

const Basic: React.FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const handleClick: MenuProps['onClick'] = ({ key }) => navigate(key);

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
          openKeys={openKeys}
          onClick={handleClick}
          onOpenChange={(openKeys) => setOpenKeys(openKeys)}
          items={[
            {
              key: '/page1',
              label: 'Page1',
            },
            {
              key: '/page2',
              label: 'Page2',
            },
            {
              key: '/page3',
              label: 'Page3',
            },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>
      <Layout.Content
        style={{
          margin: '24px 16px',
          minHeight: 280,
          background: '#fff',
        }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Basic;
