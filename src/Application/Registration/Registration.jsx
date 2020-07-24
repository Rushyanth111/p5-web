import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Card,
  Container,
  makeStyles,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
} from "@material-ui/core";

import AccountIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  Container: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Card: {
    display: "flex",
    flexDirection: "column",
    padding: "4rem",
    margin: "auto",
  },
  AccountIcon: {
    alignSelf: "center",
    margin: "1rem",
  },
  TextField: {
    margin: "1rem",
  },
});

function Registration({ isLoggedin, isTeacher }) {
  const styles = useStyles();

  if (isLoggedin) {
    if (isTeacher) {
      return <Redirect to="/TeacherHome" />;
    } else {
      return <Redirect to="/StudentHome" />;
    }
  }

  // If The User is Not Logged In, we Authenticate the Person Here:
  return (
    <Container className={styles.Container}>
      <Card className={styles.Card} variant="outlined">
        <AccountIcon fontSize="large" className={styles.AccountIcon} />
        <Typography variant="h6">Registration for DashBoard</Typography>
        <Select variant="outlined" className={styles.TextField}>
          <MenuItem value={"Teacher"}>Teacher</MenuItem>
          <MenuItem value={"Student"}>Student</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          label="Username"
          className={styles.TextField}
        />
        <TextField
          variant="outlined"
          label="Email"
          className={styles.TextField}
        />
        <TextField
          variant="outlined"
          label="Confirm Email"
          className={styles.TextField}
        />
        <TextField
          variant="outlined"
          label="Password"
          className={styles.TextField}
        />
        <Button varaint="contained" color="primary">
          Register
        </Button>
      </Card>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedin: state.isLoggedIn,
    isTeacher: state.isTeacher,
  };
}

export default connect(mapStateToProps)(Registration);
