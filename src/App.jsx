import { Outlet } from 'react-router';
import './App.css';
import SideBar from './components/SideBar';
import { colors } from './components/ui/color/color';

function App() {
  return (
    <div className='flex h-screen' style={{ background: colors.neutral[50] }}>
      <SideBar />
      <main className='flex-1 p-6 overflow-auto'>
        <div className='max-w-7xl mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
