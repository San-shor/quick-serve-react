import { Outlet } from 'react-router';
import './App.css';
import { colors } from './components/ui/color/color';
import SideBar from './components/ui/SideBar';

function App() {
  return (
    <div className='flex h-screen' style={{ background: colors.neutral[50] }}>
      <SideBar />
      <main className='flex-1 p-4'>
        <div className='max-w-4xl mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
