import { Card, Image, Skeleton, Typography } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const { Title } = Typography;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
`;

const photos = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  img: `/images/profile/user-${i + 1}.jpg`
}));

const PhotosCard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Card styles={{ body: { padding: 0 } }}>
      <Title level={4}>Photos</Title>
      <PhotoGrid>
        {photos.map((photo) =>
          isLoading ? (
            <Skeleton.Image key={photo.id} style={{ width: 92, height: 92 }} active />
          ) : (
            <Image key={photo.id} src={photo.img} alt='photo' width={92} height={92} style={{ borderRadius: 8 }} />
          )
        )}
      </PhotoGrid>
    </Card>
  );
};

export default PhotosCard;
