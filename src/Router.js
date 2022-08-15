import { useRoutes } from 'react-router';

export default function Router() {
  return useRoutes([
    { path: '/todos', element: null },
    { path: '/', element: null },
  ]);
}
