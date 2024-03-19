import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import LineChart from './Chart';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Threat Monitoring',
    children: <LineChart />,
  },
];

const Page2: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default Page2;
