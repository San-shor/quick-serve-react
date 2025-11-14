import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import './App.css';
import SideBar from './components/SideBar';
import { colors } from './components/ui/color/color';

function App() {
  return (
    <div className='flex h-screen' style={{ background: colors.neutral[50] }}>
      <SideBar />
      <main className='flex-1 p-6 overflow-auto'>
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
            error: {
              duration: 5000,
            },
          }}
        />
        <div className='max-w-7xl mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
