import React, { useState } from 'react';
import Home from './components/home';
import SidePanel from './components/sidePanel';
import Employment from './components/employment';
import Projects from './components/projects';
import Resume from './components/resume';
import Education from './components/education';
import { Button } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

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
        return <Home />
      case pages[1]:
        return <Employment />
      case pages[2]:
        return <Projects />
      case pages[3]:
        return <Resume />
      case pages[4]:
        return <Education />
      default:
        return <Home />
    }
  }

  return (
    <div style={{ display: 'flex', height: 'max-height'}} key={page}>
      <Button onClick={openSidePanel} style={{ position: 'absolute', top: '1rem', left: 0, zIndex: 3 }}>
        <DensityMediumIcon />
      </Button>
      <SidePanel page={page} open={open} onClose={closeSidePanel} onOpen={openSidePanel} setPage={setPage}/>
      {loadPage()}
    </div>
  );
};

export default App;

