import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Avatar, Typography, Select, Tag, Space } from 'antd';
import DashboardCard from '../../shared/DashboardCard';
import TopPerformerData from '@/data/TopPerformerData';

const { Text } = Typography;
const { Option } = Select;

const performers = TopPerformerData;

const PriorityTag = styled(Tag)<{ status: string }>`
  background-color: ${({ status }) =>
    status === 'High' ? '#fff1f0' : status === 'Medium' ? '#fffbe6' : status === 'Low' ? '#f6ffed' : '#f0f5ff'};
  color: ${({ status }) =>
    status === 'High' ? '#f5222d' : status === 'Medium' ? '#fa8c16' : status === 'Low' ? '#52c41a' : '#722ed1'};
  border: none;
  font-weight: 700;
`;

const TopPerformers: React.FC = () => {
  const [month, setMonth] = useState('1');

  const handleChange = (value: string) => {
    setMonth(value);
  };

  const columns = [
    {
      title: <Text strong>Assigned</Text>,
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) => (
        <Space size='middle'>
          <Avatar src={record.imgsrc} size={40} />
          <div>
            <Text strong>{record.name}</Text>
            <br />
            <Text type='secondary' style={{ fontSize: 12 }}>
              {record.post}
            </Text>
          </div>
        </Space>
      )
    },
    {
      title: <Text strong>Project</Text>,
      dataIndex: 'pname',
      key: 'pname',
      render: (text: string) => (
        <Text type='secondary' style={{ fontWeight: 400 }}>
          {text}
        </Text>
      )
    },
    {
      title: <Text strong>Priority</Text>,
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <PriorityTag status={status}>{status}</PriorityTag>
    },
    {
      title: <Text strong>Budget</Text>,
      dataIndex: 'budget',
      key: 'budget',
      render: (value: string) => <Text>${value}k</Text>
    }
  ];

  return (
    <DashboardCard
      title='Top Projects'
      subtitle='Best Products'
      action={
        <Select value={month} size='small' onChange={handleChange}>
          <Option value='1'>March 2023</Option>
          <Option value='2'>April 2023</Option>
          <Option value='3'>May 2023</Option>
        </Select>
      }
    >
      <Table columns={columns} dataSource={performers} pagination={false} rowKey='id' />
    </DashboardCard>
  );
};

export default TopPerformers;
