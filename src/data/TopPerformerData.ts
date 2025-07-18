import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';

interface PerformerType {
  id: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  budget: string;
}

const TopPerformerData: PerformerType[] = [
  {
    id: '1',
    imgsrc: user1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Low',
    budget: '3.9'
  },
  {
    id: '2',
    imgsrc: user2,
    name: 'John Deo',
    post: 'Web Developer',
    pname: 'Flexy Admin',
    status: 'Medium',
    budget: '24.5'
  },
  {
    id: '3',
    imgsrc: user3,
    name: 'Nirav Joshi',
    post: 'Web Manager',
    pname: 'Material Pro',
    status: 'High',
    budget: '12.8'
  },
  {
    id: '4',
    imgsrc: user4,
    name: 'Yuvraj Sheth',
    post: 'Project Manager',
    pname: 'Xtreme Admin',
    status: 'Very High',
    budget: '2.4'
  }
];

export default TopPerformerData;
