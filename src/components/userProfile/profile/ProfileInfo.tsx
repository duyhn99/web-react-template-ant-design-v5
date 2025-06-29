import { genderSelect } from '@/configs/select.configs';
import { useAppSelector } from '@/hooks/reduxHooks';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { Check, Pencil } from 'lucide-react';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProfileInfo = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [type, setType] = useState<'view' | 'update'>('view');
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    form.setFieldsValue(user);
    user?.birthday && form.setFieldsValue({ birthday: moment(user.birthday) });
  }, []);

  const onSubmit = async () => {
    form.submit();
    if (type === 'view') {
      setType('update');
    } else {
      setType('view');
    }
  };

  return (
    <Card>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Button
            icon={type === 'view' ? <Pencil size={16} /> : <Check size={16} />}
            className='float-right'
            type='primary'
            onClick={onSubmit}
          >
            {type === 'view' ? t('button.update') : t('button.save')}
          </Button>
        </Col>
        <Col span={24}>
          <Form
            form={form}
            variant={type === 'view' ? 'borderless' : 'outlined'}
            layout='vertical'
            disabled={type === 'view'}
          >
            <Row gutter={[10, 10]}>
              <Col span={12}>
                <Form.Item
                  name='name'
                  label={t('user.fullName')}
                  rules={[{ required: true, message: t('rules.notEmpyFullName') }]}
                >
                  <Input placeholder={t('placeholder.fullName')} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name='birthday'
                  label={t('user.birthday')}
                  rules={[{ required: true, message: t('rules.notEmpyBirthday') }]}
                >
                  <DatePicker format='DD/MM/YYYY' className='w-full' placeholder={t('placeholder.birthday')} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name='gender'
                  label={t('user.gender')}
                  rules={[{ required: true, message: t('rules.notEmptyGender') }]}
                >
                  <Select options={genderSelect} placeholder={t('placeholder.gender')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='phone'
                  label={t('user.phone')}
                  rules={[
                    { required: true, message: t('rules.notEmpyPhone') },
                    { min: 9, message: t('rules.notEmptyPhone') },
                    { type: 'string', message: t('rules.invalidPhone') }
                  ]}
                >
                  <Input placeholder={t('placeholder.phone')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='email'
                  label={t('user.email')}
                  rules={[
                    { required: true, message: t('rules.notEmpyEmail') },
                    { type: 'email', message: t('rules.invalidEmail') }
                  ]}
                >
                  <Input type='email' placeholder={t('placeholder.email')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='district'
                  label={t('user.district')}
                  rules={[{ required: true, message: t('rules.notEmptyDistrict') }]}
                >
                  <Input placeholder={t('placeholder.district')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='area'
                  label={t('user.area')}
                  rules={[{ required: true, message: t('rules.notEmptyArea') }]}
                >
                  <Input placeholder={t('placeholder.area')} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name='address'
                  label={t('user.address')}
                  rules={[{ required: true, message: t('rules.notEmptyAddress') }]}
                >
                  <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder={t('placeholder.address')} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileInfo;
