import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome back, Username
      </Typography>
      <Typography variant="caption" component="h2" gutterBottom>
        Your last workout was 2019.05.23
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Exercise: Benchpress
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Recommendation: You should be fully recovered to do this exercise again
      </Typography>
    </>
  );
}

export default Home;
