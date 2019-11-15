import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    width: "90vw",
    overflowX: "auto",
    backgroundColor: "#424242"
  },
  table: {
    borderBottom: "none !important"
  }
});

function Exercises() {
  const [exercises, setExercises] = useState({
    data: null,
    loading: true
  });

  useEffect(() => {
    axios.get("mockapi/index.json").then(response => {
      setTimeout(() => {
        setExercises({ data: response.data.exercises, loading: false });
      }, 1000);
    });
  }, []);

  const classes = useStyles();

  if (exercises.loading) {
    return (
      <Fragment>
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </Fragment>
    );
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Max</TableCell>
            <TableCell align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.table}>
          {exercises.data.map(e => (
            <TableRow key={e.name}>
              <TableCell component="th" scope="row">
                {e.name}
              </TableCell>
              <TableCell align="right">{e.max}</TableCell>
              <TableCell align="right">{e.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Exercises;
