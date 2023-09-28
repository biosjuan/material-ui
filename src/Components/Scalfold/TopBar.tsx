import { AppBar, Toolbar, Typography } from '@mui/material';
function MainBar() {
  return (
    <AppBar position='fixed' sx={{ zIndex: 9999 }}>
      <Toolbar>
        <Typography variant='h6' noWrap>
          Advanced Material UI Styling
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MainBar;
