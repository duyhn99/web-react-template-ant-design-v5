import { webName } from '@/configs/main.configs';
import { ROUTE } from '@/constants/routes';
import { Button, Divider, Flex, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../authForms/AuthForm';
import * as S from '../authForms/AuthForm.styles';

const { Title, Text } = Typography;

export default function RegisterForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values: { username: string; password: string; remember: boolean }) => {
    try {
      setIsLoading(true);
      console.log(values);
      await setTimeout(() => {
        navigate(ROUTE.HOME);
        setIsLoading(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <AuthForm
      title='Register'
      form={
        <Flex className='h-full w-full' justify='center' align='center'>
          <S.FormContainer>
            <Title level={3}>
              {t('auth.welcome')} {webName}
            </Title>
            <Text>Your Admin Dashboard</Text>

            <Divider plain></Divider>

            <Form layout='vertical' onFinish={onFinish}>
              <Form.Item
                label={t('auth.username')}
                name='username'
                rules={[{ required: true, message: t('rules.notEmpyUsername') }]}
              >
                <Input size='large' placeholder={t('placeholder.username')} />
              </Form.Item>

              <Form.Item
                label={t('auth.email')}
                name='email'
                rules={[
                  { required: true, message: t('rules.notEmpyEmail') },
                  { type: 'email', message: t('rules.invalidEmail') }
                ]}
              >
                <Input size='large' placeholder={t('placeholder.email')} />
              </Form.Item>

              <Form.Item
                label={t('auth.password')}
                name='password'
                rules={[{ required: true, message: t('rules.notEmpyPassword') }]}
              >
                <Input.Password size='large' placeholder={t('placeholder.password')} />
              </Form.Item>

              <Form.Item
                label={t('auth.confirmPassword')}
                name='confirmPassword'
                rules={[{ required: true, message: t('rules.notEmpyConfirmPassword') }]}
              >
                <Input.Password size='large' placeholder={t('placeholder.confirmPassword')} />
              </Form.Item>

              <Form.Item>
                <Button
                  size='large'
                  type='primary'
                  style={{ marginTop: '1rem' }}
                  htmlType='submit'
                  block
                  loading={isLoading}
                >
                  {t('auth.register')}
                </Button>
              </Form.Item>
            </Form>

            <div className='text-center'>
              {t('auth.haveAccount')}? <Link to={ROUTE.LOGIN}>{t('auth.login')}</Link>
            </div>
          </S.FormContainer>
        </Flex>
      }
    />
  );
}
