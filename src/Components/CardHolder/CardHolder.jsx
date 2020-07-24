import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  Paper: {
    background: grey[300],
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    margin: "1rem",
  },
}));

function CardHolder({ titleName }) {
  const style = useStyles();
  return (
    <Paper className={style.Paper} variant="outlined">
      <Typography variant="h6">{titleName}</Typography>
    </Paper>
  );
}

export default CardHolder;
