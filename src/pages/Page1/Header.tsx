import React from 'react';
import { Dropdown, Flex, Select, Input, Button, Space } from 'antd';
import { DownOutlined, UndoOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'label1',
    key: '1',
  },
  {
    label: 'label2',
    key: '2',
  },
  {
    label: 'label3',
    key: '3',
  },
];

const Header: React.FC = () => (
  <div style={{ marginBottom: '8px' }}>
    <Flex gap="small" style={{ marginBottom: '8px' }}>
      <Select
        defaultValue="2"
        style={{ width: 200 }}
        options={[
          { value: '1', label: 'Test1' },
          { value: '2', label: 'MNS-inspector' },
          { value: '3', label: 'Test3' },
          { value: '4', label: 'Test4', disabled: true },
        ]}
      />
      <Input.Search
        placeholder="Search device alias, IP address, MSISDN, IMEI, or IMSI"
        allowClear
        style={{ width: 400 }}
      />
    </Flex>
    <Flex gap="small">
      <Button><UndoOutlined /> Refresh</Button>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <Button>
          <Space>
            Export
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

      <Button>Delete</Button>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <Button>
          <Space>
            Network Management
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Button>Reset Risk Level</Button>
      <Button>Add to Group</Button>
    </Flex>
  </div>
);

export default Header;
