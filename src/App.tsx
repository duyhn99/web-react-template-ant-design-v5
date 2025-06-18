import { ConfigProvider, theme as antdTheme } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { themeConfig } from './configs/theme.configs.ts';
import { useAppSelector } from './hooks/reduxHooks';
import routes from './routes/routes.tsx';
import { webName } from './configs/main.configs.ts';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  // const simulateLoading = () => {
  //   start();
  //   setTimeout(() => {
  //     complete();
  //   }, 1000);
  // };

  return (
    <ConfigProvider
      theme={{ ...themeConfig, algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm }}
    >
      <title>{webName}</title>
      <RouterProvider
        router={routes}
        future={{
          v7_startTransition: true
        }}
      />
    </ConfigProvider>
  );
}

export default App;
