import { AppBar, Button, createMuiTheme, IconButton, makeStyles, Snackbar, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import './App.css';
import LogoFPI from './logoatas.png';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "rgb(131, 4, 182)",
  //   },

  // },
},
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img alt="logo fpi" src={LogoFPI} height="90" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              FPI
          </Typography>
            <Button onClick={handleClick} color="inherit">Login</Button> 
          </Toolbar>

        </AppBar>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Takebeer!
        </Alert>
      </Snackbar>
    </ThemeProvider>

  );
}

export default App;
