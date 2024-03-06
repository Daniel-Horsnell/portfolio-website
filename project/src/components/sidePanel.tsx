import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


// Define your styles using makeStyles
const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    color: '#716f6f',
    margin: '1rem',
    marginRight: '0px',
  },
}));

const Photo = styled.img`
  width: 30vh;
  height: auto;
`;

const icons = [HomeIcon, WorkIcon, ConstructionIcon, SchoolIcon]

interface SidePanelProps {
  page: string;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  setPage: (page: string) => void;
}

export default function SidePanel({page, open, onClose, onOpen, setPage}: SidePanelProps) {
  const classes = useStyles();

  const list = () => (
    <Box
      sx={{ width: '100%' }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {['Home', 'Employment', 'Projects'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setPage(text)}>
              <ListItemIcon>
                {React.createElement(icons[index])}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Education'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setPage(text)}>
              <ListItemIcon>
              {React.createElement(icons[index + 3])}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={'left'}
          open={open}
          onClose={onClose}
        >
          <div >
            <div className={classes.container}>
              <Photo key={'profile'} src={'profile.jpeg'} alt={`profile photo`}/>
              {list()}
            </div>
            <a href={'https://github.com/Daniel-Horsnell'}>
              <GitHubIcon className={classes.icon} fontSize='large'/>
            </a>
            <a href={'https://www.linkedin.com/in/daniel-horsnell/'}>
              <LinkedInIcon className={classes.icon} fontSize='large'/>
            </a>
          </div>
        </Drawer>
        
      </React.Fragment>

    </div>
  );
}