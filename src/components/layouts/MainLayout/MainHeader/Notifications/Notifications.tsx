import { Loading } from '@/components/common/Loading/Loading';
import { Notification } from '@/types/notifications.ts';
import { Alert, Badge, Button, Card, CardProps, List, Popover } from 'antd';
import { Bell } from 'lucide-react';
import { useState } from 'react';
import { NotificationsItem } from './NotificationsItem';
import { HeaderActionWrapper } from '@/components/header/Header.styles';

type Props = {
  data?: Notification[];
  loading?: boolean;
  error?: any;
} & CardProps;

export const Notifications = ({ data, loading, error, ...others }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      trigger='click'
      content={
        <Card
          title='Notifications'
          extra={<Button>View all</Button>}
          className='card notifications-list-card'
          {...others}
        >
          {error ? (
            <Alert message='Error' description={error.toString()} type='error' showIcon />
          ) : loading ? (
            <Loading />
          ) : (
            <List
              itemLayout='vertical'
              size='large'
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
                align: 'center'
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.notification_id}>
                  <NotificationsItem data={item} />
                </List.Item>
              )}
            />
          )}
        </Card>
      }
      onOpenChange={setIsOpen}
    >
      <HeaderActionWrapper>
        <Button
          type={isOpen ? 'default' : 'text'}
          icon={
            <Badge dot>
              <Bell />
            </Badge>
          }
        />
      </HeaderActionWrapper>
    </Popover>
  );
};
