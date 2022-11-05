import Header from './components/Header';
import '@fontsource/plus-jakarta-sans';
import Task from './components/Task';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const sidebar = useSelector((state) => state.sidebar.value);
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    if (theme) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [theme]);
  return (
    <div className={`h-screen w-screen overflow-hidden`}>
      <div className=''>
        <Header />
        <main
          className={`h-screen overflow-auto pt-16 transition-all md:pt-20 xl:pt-24 ${
            sidebar && 'md:pl-[260px]'
          }`}>
          <Sidebar />
          <Task />
        </main>
      </div>
    </div>
  );
}

export default App;
