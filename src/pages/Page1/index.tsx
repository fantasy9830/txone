import React from 'react';
import Header from './Header';
import { Table, Descriptions } from 'antd';
import type { TableProps, DescriptionsProps } from 'antd';
import { CloseCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  risk: boolean;
  imei: number;
  address: string;
}

const columns: TableProps<DataType>['columns'] = [
  Table.EXPAND_COLUMN,
  Table.SELECTION_COLUMN,
  {
    title: 'Risk Level',
    dataIndex: 'risk',
    key: 'risk',
    render: (risk) => risk ? <div><CloseCircleOutlined /> Critical</div> : <div><ExclamationCircleOutlined /> No risk</div>,
    sorter: (a, b) => Number(a.risk) - Number(b.risk),
  },
  {
    title: 'IMEI',
    dataIndex: 'imei',
    key: 'imei',
  },
  {
    title: 'IP address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    risk: true,
    imei: 12345,
    address: '192.168.0.1',
  },
  {
    key: '2',
    risk: false,
    imei: 12345,
    address: '127.0.0.1',
  },
  {
    key: '3',
    risk: false,
    imei: 12345,
    address: '185.194.186.64',
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Operation system',
    children: 'Ubuntu',
  },
  {
    key: '2',
    label: 'Vendor',
    children: 'Samsung',
  },
  {
    key: '3',
    label: 'Device type',
    children: 'XXXXX',
  },
  {
    key: '4',
    label: 'Radio ID',
    children: '0DA8702',
  },
  {
    key: '5',
    label: 'Access technology',
    children: 'E-UTRAN',
  },
];

const Page1: React.FC = () => (
  <div>
    <Header />
    <Table
      rowSelection={{}}
      expandable={{
        expandedRowRender: (record) => (
          <Descriptions
          column={1}
          bordered
          items={items}
          />
        ),
      }}
      columns={columns}
      dataSource={data}
    />
  </div>
);

export default Page1;
