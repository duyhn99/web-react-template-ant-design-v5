// Notifications dropdown
import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import iconAccount from '@/assets/svgs/icon-account.svg';
import iconInbox from '@/assets/svgs/icon-inbox.svg';
import iconTasks from '@/assets/svgs/icon-tasks.svg';

interface notificationType {
  avatar: string;
  title: string;
  subtitle: string;
}

const notifications: notificationType[] = [
  {
    avatar: user1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him'
  },
  {
    avatar: user2,
    title: 'New message received',
    subtitle: 'Salma sent you new message'
  },
  {
    avatar: user3,
    title: 'New Payment received',
    subtitle: 'Check your earnings'
  },
  {
    avatar: user4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks'
  },
  {
    avatar: user1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him'
  },
  {
    avatar: user2,
    title: 'New message received',
    subtitle: 'Salma sent you new message'
  },
  {
    avatar: user3,
    title: 'New Payment received',
    subtitle: 'Check your earnings'
  },
  {
    avatar: user4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks'
  }
];

//
// Profile dropdown
//
interface ProfileType {
  href: string;
  title: string;
  subtitle: string;
  icon: any;
}
const profile: ProfileType[] = [
  {
    href: '/apps/user-profile/profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: iconAccount
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: iconInbox
  },
  {
    href: '/apps/notes',
    title: 'My Tasks',
    subtitle: 'To-do and Daily Tasks',
    icon: iconTasks
  }
];

// apps dropdown

interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
}

const appsLink: appsLinkType[] = [
  {
    href: '/apps/chats',
    title: 'Chat Application',
    subtext: 'New messages arrived',
    avatar: '/images/svgs/icon-dd-chat.svg'
  },
  {
    href: '/apps/ecommerce/shop',
    title: 'eCommerce App',
    subtext: 'New stock available',
    avatar: '/images/svgs/icon-dd-cart.svg'
  },
  {
    href: '/apps/notes',
    title: 'Notes App',
    subtext: 'To-do and Daily tasks',
    avatar: '/images/svgs/icon-dd-invoice.svg'
  },
  {
    href: '/apps/calendar',
    title: 'Calendar App',
    subtext: 'Get dates',
    avatar: '/images/svgs/icon-dd-date.svg'
  },
  {
    href: '/apps/contacts',
    title: 'Contact Application',
    subtext: '2 Unsaved Contacts',
    avatar: '/images/svgs/icon-dd-mobile.svg'
  },
  {
    href: '/apps/tickets',
    title: 'Tickets App',
    subtext: 'Submit tickets',
    avatar: '/images/svgs/icon-dd-lifebuoy.svg'
  },
  {
    href: '/apps/email',
    title: 'Email App',
    subtext: 'Get new emails',
    avatar: '/images/svgs/icon-dd-message-box.svg'
  },
  {
    href: '/apps/blog/post',
    title: 'Blog App',
    subtext: 'added new blog',
    avatar: '/images/svgs/icon-dd-application.svg'
  }
];

interface LinkType {
  href: string;
  title: string;
}

const pageLinks: LinkType[] = [
  {
    href: '/theme-pages/pricing',
    title: 'Pricing Page'
  },
  {
    href: '/auth/auth1/login',
    title: 'Authentication Design'
  },
  {
    href: '/auth/auth1/register',
    title: 'Register Now'
  },
  {
    href: '/404',
    title: '404 Error Page'
  },
  {
    href: '/apps/note',
    title: 'Notes App'
  },
  {
    href: '/apps/user-profile/profile',
    title: 'User Application'
  },
  {
    href: '/apps/blog/post',
    title: 'Blog Design'
  },
  {
    href: '/apps/ecommerce/checkout',
    title: 'Shopping Cart'
  }
];

export { notifications, profile, pageLinks, appsLink };
