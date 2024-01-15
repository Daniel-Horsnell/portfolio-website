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

const icons = [HomeIcon, WorkIcon, ConstructionIcon, AssignmentIcon, SchoolIcon]

interface SidePanelProps {
  page: string;
  setPage: (page: string) => void;
}

export default function SidePanel({page, setPage}: SidePanelProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  }

  const onOpen = () => {
    setOpen(true);
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
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
        {['Resume', 'Education'].map((text, index) => (
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
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={onOpen} style={{ marginTop: '1rem'}}>
          <DensityMediumIcon/>
        </Button>
        <Drawer
          anchor={'left'}
          open={open}
          onClose={onClose}
        >
          {list()}
        </Drawer>
      </React.Fragment>

    </div>
  );
}