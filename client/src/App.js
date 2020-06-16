import React from "react";
import "./App.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeFile from "./util/theme";

const theme = createMuiTheme(themeFile);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>Hello</header>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
