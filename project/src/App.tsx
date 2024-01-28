import React, { useState } from 'react';
import Home from './components/home';
import SidePanel from './components/sidePanel';
import Employment from './components/employment';
import Projects from './components/projects';
import Resume from './components/resume';
import Education from './components/education';

const pages = ['Home', 'Employment', 'Projects', 'Resume', 'Education'];

const App: React.FC = () => {
  const [page, setPage] = useState<string>('Home')
  const [open, setOpen] = React.useState<boolean>(false);

  const closeSidePanel = () => {
    setOpen(false);
  }

  const openSidePanel = () => {
    setOpen(true);
  }

  const loadPage = () => {
    switch (page) {
      case pages[0]:
        return <Home onOpen={openSidePanel}/>
      case pages[1]:
        return <Employment onOpen={openSidePanel}/>
      case pages[2]:
        return <Projects onOpen={openSidePanel}/>
      case pages[3]:
        return <Resume onOpen={openSidePanel}/>
      case pages[4]:
        return <Education onOpen={openSidePanel}/>
      default:
        return <Home onOpen={openSidePanel}/>
    }
  }

  return (
    <div style={{ display: 'flex', height: 'max-height'}} key={page}>
      <SidePanel page={page} open={open} onClose={closeSidePanel} onOpen={openSidePanel} setPage={setPage}/>
      {loadPage()}
    </div>
  );
};

export default App;

