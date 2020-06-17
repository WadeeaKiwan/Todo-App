import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button,
  withTheme
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MoreIcon from "@material-ui/icons/MoreVert";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.styles,
  grow: {
    flexGrow: 1
  },
  title: {
    "& a": {
      textDecoration: "none",
      color: "inherit"
    }
  },
  headerIcon: {
    width: 30,
    marginRight: theme.spacing(1)
  },
  navButtons: {
    padding: 0,
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      padding: "0.4rem"
    },
    "& a.active": {
      backgroundColor: "white",
      color: theme.palette.primary.main,
      borderRadius: 5
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

const Header = ({ classes, isAuthenticated, logoutUser, history }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isAuthenticated ? (
        <React.Fragment>
          {" "}
          <MenuItem className={classes.navButtons}>
            <NavLink to={"/dashboard"}>
              <IconButton color='inherit'>
                <AccountCircle />
              </IconButton>
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem className={classes.navButtons}>
            <Button onClick={() => logoutUser(history)}>
              <IconButton color='inherit'>
                <PowerSettingsNewIcon />
              </IconButton>
              Logout
            </Button>
          </MenuItem>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MenuItem className={classes.navButtons}>
            <NavLink to={"/signup"}>
              <IconButton color='inherit'>
                <MailIcon />
              </IconButton>
              Signup
            </NavLink>
          </MenuItem>
          <MenuItem className={classes.navButtons}>
            <NavLink to={"/login"}>
              <IconButton color='inherit'>
                <NotificationsIcon />
              </IconButton>
              Login
            </NavLink>
          </MenuItem>
        </React.Fragment>
      )}
    </Menu>
  );

  return (
    <AppBar position='static' className={classes.grow}>
      <Toolbar>
        <NavLink to={"/"}>
          {" "}
          <img
            src={"/assets/todo-icon-header.jpg"}
            alt='Todo Header Icon'
            className={classes.headerIcon}
          />
        </NavLink>

        <Typography className={classes.title} variant='h6' noWrap>
          <NavLink to={"/"}>TodoApp</NavLink>
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          {isAuthenticated ? (
            <React.Fragment>
              {" "}
              <Button edge='end' color='inherit' className={classes.navButtons}>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </Button>
              <Button
                edge='end'
                color='inherit'
                onClick={() => logoutUser(history)}
                className={classes.navButtons}
              >
                <a href='!#'>Logout</a>
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button aria-label='signup user' color='inherit' className={classes.navButtons}>
                <NavLink to={"/signup"}>Signup</NavLink>
              </Button>
              <Button aria-label='login user' color='inherit' className={classes.navButtons}>
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
            </React.Fragment>
          )}
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label='show more'
            aria-controls={mobileMenuId}
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(withRouter(Header)));
