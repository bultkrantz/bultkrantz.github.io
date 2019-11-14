import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "#424242",
    width: "90vw",
    margin: "auto",
    bottom: "5px",
    position: "fixed",
    left: 0,
    right: 0
  },
  navButton: {
    color: "#c2c2c2"
  }
});

export default function Navigation() {
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    switch (history.location.pathname) {
      case "/home":
        return setValue(0);

      case "/exercises":
        return setValue(1);

      case "/progress":
        return setValue(2);

      default:
        return setValue(0);
    }
  }, [history.location.pathname]);

  return (
    <BottomNavigation value={value} showLabels className={classes.root}>
      <BottomNavigationAction
        className={classes.navButton}
        label="Start"
        selected={history.location.pathname === "/home"}
        icon={<HomeIcon />}
        onClick={() => history.push("/home")}
      />
      <BottomNavigationAction
        className={classes.navButton}
        label="Exercises"
        icon={<FitnessCenterIcon />}
        onClick={() => history.push("/exercises")}
      />
      <BottomNavigationAction
        className={classes.navButton}
        label="Progress"
        icon={<BarChartIcon />}
        onClick={() => history.push("/progress")}
      />
    </BottomNavigation>
  );
}
