import { createBrowserRouter } from 'react-router';
import App from '../App.jsx';
import DashBoard from './DashBoard.jsx';
import CreateWorker from './worker/CreateWorker.jsx';
import WorkerList from './worker/WrokerList.jsx';

const routes = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: DashBoard },
      { path: '/create-worker', Component: CreateWorker },
      { path: '/manage-workers', Component: WorkerList },
    ],
  },
]);

export default routes;
