import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeFile from "./util/theme";

import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./util/PrivateRoute";
import Home from "./components/Home";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
import { loadUser } from "./redux/actions/userActions";

const theme = createMuiTheme(themeFile);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Header />
          <main className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
