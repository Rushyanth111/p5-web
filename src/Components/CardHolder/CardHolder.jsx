import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  Paper: {
    background: grey[400],
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
}));

function CardHolder() {
  const style = useStyles();
  return <Paper className={style.Paper}>Hello World</Paper>;
}

export default CardHolder;
