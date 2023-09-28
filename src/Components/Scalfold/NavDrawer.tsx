'use client';
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useTheme, Theme } from '@mui/material/styles';

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    '& .MuiBackdrop-root': {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(120,120,120,0.2)',
  },
};

function NavDrawer() {
  const navItems = [
    { text: 'Input Form', route: '/form' },
    { text: 'Contact Card Grid', route: '/grid' },
    { text: 'Contact Table', route: '/table' },
    { text: 'Contact Data Grid', route: 'grid' },
  ];
  const theme = useTheme();

  return (
    <>
      <AppBar position='fixed' sx={themedStyles(theme).appbar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='temporary'
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{
          sx: simpleStyles.drawerPaper,
          elevation: 9,
        }}
        aria-label='drawer'
      >
        <Toolbar />
        <List>
          {navItems.map((nav, index) => (
            <Link key={nav.text} href={nav.route} passHref>
              {/* Use passHref to ensure proper href attribute */}
              <ListItem>{nav.text}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Toolbar />
    </>
  );
}

export default NavDrawer;
