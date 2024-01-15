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
      <SidePanel page={page} setPage={setPage}/>
      {loadPage()}
    </div>
  );
};

export default App;

