import { Outlet } from 'react-router';
import './App.css';
import SideBar from './components/ui/SideBar';

function App() {
  return (
    <div className='flex h-screen bg-neutral-50'>
      <SideBar />
      <main className='flex-1 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
