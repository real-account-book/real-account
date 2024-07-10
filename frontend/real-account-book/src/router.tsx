import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import YearListPage from './pages/YearListPage/YearListPage';
import MonthListPage from './pages/MonthListPage/MonthListPage';
import MonthDetailPage from './pages/MonthDetailPage/MonthDetailPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
			{ index: true, element: <YearListPage /> },
			{ path: 'month/:year', element: <MonthListPage /> },
      // year e.g. 2024 (year)
			{ path: 'detail/:date', element: <MonthDetailPage /> },
      // date e.g. 202410 (year + month)
		],
  }
]);
