import { createBrowserRouter } from 'react-router';
import App from '../App.jsx';
import CreateWorker from './worker/CreateWorker.jsx';

const routes = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, element: '' },
      { path: '/create-worker', Component: CreateWorker },
    ],
  },
]);

export default routes;
