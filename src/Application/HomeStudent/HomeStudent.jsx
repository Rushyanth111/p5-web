import React from "react";
import AppBar from "../../Components/AppBar";
import CardHolder from "../../Components/CardHolder";
import { Toolbar, makeStyles, Box, Container } from "@material-ui/core";

const useStyles = makeStyles({
  Container: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
  },
});

function HomeStudent() {
  const styles = useStyles();
  return (
    <Box>
      <AppBar />
      <Toolbar />
      <Container className={styles.Container}>
        <CardHolder />
      </Container>
    </Box>
  );
}

export default HomeStudent;
