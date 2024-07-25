import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import { main } from './App.css.ts';
import Footer from './components/Footer/Footer.tsx';
import { FloatButton } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useYearTotalStore from './store/yearTotalStore.ts';

const App: FC = () => {
  const navigate = useNavigate();
  const { year } = useYearTotalStore();

  return (
    <>
      <Header />
      <main className={main}>
        <Outlet />
        <FloatButton
          icon={<BarsOutlined />} 
          onClick={() => navigate(`/${year}`)} 
        />
      </main>
      <Footer />
		</>
	);
};

export default App;