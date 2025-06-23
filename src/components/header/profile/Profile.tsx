import user1 from '@/assets/images/profile/user-1.jpg';
import { IconWrapper } from '@/styles/GlobalStyles';
import { Avatar, Popover } from 'antd';
import React from 'react';
import ProfileOverlay from './ProfileOverlay';

const Profile: React.FC = () => {
  return (
    <Popover content={<ProfileOverlay />} trigger='click'>
      <IconWrapper>
        <Avatar src={user1} size={35} />
      </IconWrapper>
    </Popover>
  );
};

export default Profile;
