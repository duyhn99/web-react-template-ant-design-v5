import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import { withLoading } from '@/hocs/withLoading.hoc';
import React, { lazy, ReactNode, useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';

// Lazy load your route components
const HomeLazy = lazy(() => import('@/pages/Home/HomePage'));
const LoginLazy = lazy(() => import('@/components/auth/auth1/login/LoginForm'));
const RegisterLazy = lazy(() => import('@/components/auth/auth1/register/RegisterForm'));
const ForgotPasswordLazy = lazy(() => import('@/components/auth/auth1/forgot-password/ForgotPassword'));
const UserProfileLazy = lazy(() => import('@/pages/UserProfile/UserProfile'));

// Wrap your route components with the HOC
const HomePage = withLoading(HomeLazy);
const LoginPage = withLoading(LoginLazy);
const RegisterPage = withLoading(RegisterLazy);
const ForgotPasswordPage = withLoading(ForgotPasswordLazy);
const UserProfilePage = withLoading(UserProfileLazy);

// Custom scroll restoration function
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // Scroll to the top when the location changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

type PageProps = {
  children: ReactNode;
};

// Create an HOC to wrap your route components with ScrollToTop
const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper children={<MainLayout />} />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'user-profile',
        children: [
          {
            path: 'profile',
            element: <UserProfilePage />
          },
          {
            path: 'followers',
            element: <div>Followers</div>
          },
          {
            path: 'friends',
            element: <div>Friends</div>
          },
          {
            path: 'gallery',
            element: <div>Gallery</div>
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />
      }
    ]
  }
]);

export default router;
