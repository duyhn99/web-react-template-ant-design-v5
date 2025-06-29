import React, { useEffect, useState } from 'react';
import { Flex, Tabs } from 'antd';
import { UserCircle, Heart, Users, Image as GalleryIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@/components/common/Box/Box';
import styled from 'styled-components';
import { FONT_WEIGHT } from '@/constants/constants';

const TabsStyle = styled(Tabs)`
  .ant-tabs-tab {
    margin: 0 !important;
  }
`;

const ProfileTab: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState(pathname);

  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);

  const ProfileTabs = [
    {
      key: '/user-profile/profile',
      label: 'Profile',
      icon: <UserCircle size={20} />
    },
    {
      key: '/user-profile/followers',
      label: 'Followers',
      icon: <Heart size={20} />
    },
    {
      key: '/user-profile/friends',
      label: 'Friends',
      icon: <Users size={20} />
    },
    {
      key: '/user-profile/gallery',
      label: 'Gallery',
      icon: <GalleryIcon size={20} />
    }
  ];

  const handleChange = (key: string) => {
    setActiveKey(key);
    navigate(key);
  };

  return (
    <Box style={{ background: '#F2F6FA', marginTop: 8 }}>
      <Flex justify='end'>
        <TabsStyle
          tabBarStyle={{ margin: 0 }}
          activeKey={activeKey}
          defaultActiveKey='/user-profile/profile'
          onChange={handleChange}
          items={ProfileTabs.map((tab) => ({
            key: tab.key,
            label: (
              <Flex align='center' gap={8} style={{ padding: '0 16px' }}>
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </Flex>
            )
          }))}
        />
      </Flex>
    </Box>
  );
};

export default ProfileTab;
