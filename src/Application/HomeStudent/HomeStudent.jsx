import React from "react";
import AppBar from "../../Components/AppBar";
import CardHolder from "../../Components/CardHolder";
import { Toolbar, makeStyles, Box, Container } from "@material-ui/core";

const useStyles = makeStyles({
  OuterContainer: {
    display: "flex",
  },
  CardContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    margin: "auto",
    flex: 1,
  },
});

function HomeStudent() {
  const styles = useStyles();
  return (
    <Container>
      <AppBar />
      <Toolbar />
      <Container className={styles.CardContainer}>
        <CardHolder titleName="Questions Answered" />
        <CardHolder titleName="Questions UnAnswered" />
      </Container>
    </Container>
  );
}

export default HomeStudent;
