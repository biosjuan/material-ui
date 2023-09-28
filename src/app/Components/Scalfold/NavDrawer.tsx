import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';

function NavDrawer() {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant='temporary' open={true} aria-label='drawer'>
        <List>
          {[{ text: 'Input Form' }, { text: 'Contact Card Grid' }].map(
            (nav, index) => (
              <ListItem key={nav.text}>{nav.text}</ListItem>
            )
          )}
        </List>
      </Drawer>
      <main></main>
    </div>
  );
}

export default NavDrawer;
