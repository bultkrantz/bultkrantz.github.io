import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    text: {
      primary: "white"
    },
    primary: {
      main: "#abdeff",
      secondary: "red"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#333"
    }
  }
});

export default theme;
