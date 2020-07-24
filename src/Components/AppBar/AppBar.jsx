import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Profile from "@material-ui/icons/AccountCircle";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[600],
    },
  },
});

const useStyles = makeStyles(() => ({
  Toolbar: {
    display: "flexbox",
    justifyContent: "space-between",
    alignContent: "center",
  },
}));

function TopAppBar() {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar className={styles.Toolbar}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">TeacherStudent ChatBot</Typography>
          <IconButton>
            <Profile />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default TopAppBar;
