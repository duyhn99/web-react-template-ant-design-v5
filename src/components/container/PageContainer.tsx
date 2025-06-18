import { webName } from '@/configs/main.configs';
import { JSX } from 'react';

type Props = {
  description?: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const PageContainer = ({ title, description, children }: Props) => {
  const web = `${title} | ${webName}`;
  return (
    <>
      <title>{web}</title>
      <meta name='description' content={description} />
      <div>{children}</div>
    </>
  );
};

export default PageContainer;
