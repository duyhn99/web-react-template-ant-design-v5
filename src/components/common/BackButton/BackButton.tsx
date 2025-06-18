import { Button, ButtonProps, Tooltip } from 'antd';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  wIcon?: boolean;
  iconOnly?: boolean;
  children?: React.ReactNode;
} & ButtonProps;

const BackButton: React.FC<BackButtonProps> = ({ wIcon, iconOnly, children, ...props }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Tooltip title={t('backButton.title')}>
      <Button icon={wIcon || iconOnly ? <ChevronLeft /> : null} onClick={() => navigate(-1)} {...props}>
        {!iconOnly && children}
      </Button>
    </Tooltip>
  );
};

export default BackButton;
