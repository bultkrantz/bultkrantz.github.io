import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

function Home() {
  const [user, setUser] = useState({
    data: null,
    loading: true
  });

  axios.get("mockapi/index.json").then(response => {
    setTimeout(() => {
      setUser({ data: response.data.user, loading: false });
    }, 1000);
  });

  if (user.loading) {
    return (
      <Fragment>
        <Skeleton variant="rect" height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={30} />
        <Skeleton height={40} />
        <Skeleton height={30} />
      </Fragment>
    );
  }
  console.log(user);
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome back, {user.data.firstName}
      </Typography>
      <Typography variant="caption" component="h2" gutterBottom>
        Your last workout was {user.data.lastWorkout.date}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Exercise: {user.data.lastWorkout.name}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Recommendation: You should be fully recovered to do this exercise again
      </Typography>
    </>
  );
}

export default Home;
