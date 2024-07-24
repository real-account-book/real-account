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
      { path: ':year', element: <YearListPage /> },
      { path: 'month/:yearmonth', element: <MonthListPage /> },
      { path: 'detail/:date', element: <MonthDetailPage /> },
    ],
  }
]);