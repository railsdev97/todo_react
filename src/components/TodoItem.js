import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "3em",
    padding: "2em",
    margin: "1em",
  },
});

const TodoItem = (props) => {
  const classes = useStyles();
  const handleDelete = () => {
    console.log("Clicked");
  };
  return (
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <Paper elevation={1} className={classes.root}>
          {props.item.task}
          <hr />
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleDelete}
          >
            Remove
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
