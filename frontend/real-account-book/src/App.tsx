import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';

const App: FC = () => {
	return (
		<>
      <Header />
      <main>
        <Outlet/>
      </main>
		</>
	);
};

export default App;