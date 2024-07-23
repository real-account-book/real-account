import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import { main } from './App.css.ts';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className={main}>
        <Outlet />
      </main>
    </>
  );
};

export default App;