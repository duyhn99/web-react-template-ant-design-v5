import LoginBg from '@/assets/images/backgrounds/login-bg.svg';
import Logo from '@/assets/react.svg';
import PageContainer from '@/components/container/PageContainer';
import { webName } from '@/configs/main.configs';
import { ROUTE } from '@/constants/routes';
import { Col, Flex, Image, Row, Typography } from 'antd';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import * as S from './AuthForm.styles';

const { Title } = Typography;

interface AuthFormProps {
  title: string;
  description?: string;
  form: JSX.Element;
}

export default function AuthForm({ title, description, form }: AuthFormProps) {
  return (
    <PageContainer title={title} description={description}>
      <Row justify='center' className='h-screen'>
        <Col xs={24} lg={14} xl={16}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              content: '""',
              background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              opacity: 0.3,
              zIndex: 0
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link to={ROUTE.HOME} replace>
              <S.LogoContainer>
                <Image src={Logo} preview={false} />
                <Title level={3}>{webName}</Title>
              </S.LogoContainer>
            </Link>
            <S.LoginImageBox>
              <Flex justify='center' align='center' className='h-full'>
                <Image src={LoginBg} alt='bg' width={500} height={500} preview={false} />
              </Flex>
            </S.LoginImageBox>
          </div>
        </Col>

        <Col xs={24} lg={10} xl={8}>
          {form}
        </Col>
      </Row>
    </PageContainer>
  );
}
