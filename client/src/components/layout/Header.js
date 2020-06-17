import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MoreIcon from "@material-ui/icons/MoreVert";

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
    "& a": {
      textDecoration: "none",
      color: "inherit",
      padding: "0.4rem"
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

const Header = ({ classes }) => {
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
      <MenuItem className={classes.navButtons}>
        <Link to={"/signup"}>
          <IconButton color='inherit'>
            <MailIcon />
          </IconButton>
          Signup
        </Link>
      </MenuItem>
      <MenuItem className={classes.navButtons}>
        <Link to={"/login"}>
          <IconButton color='inherit'>
            <NotificationsIcon />
          </IconButton>
          Login
        </Link>
      </MenuItem>
      <MenuItem className={classes.navButtons}>
        <Link to={"/login"}>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem className={classes.navButtons}>
        <Link to={"/login"}>
          <IconButton color='inherit'>
            <PowerSettingsNewIcon />
          </IconButton>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position='static' className={classes.grow}>
      <Toolbar>
        <Link to={"/"}>
          {" "}
          <img
            src={"/assets/todo-icon-header.jpg"}
            alt='Todo Header Icon'
            className={classes.headerIcon}
          />
        </Link>

        <Typography className={classes.title} variant='h6' noWrap>
          <Link to={"/"}>TodoApp</Link>
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button aria-label='signup user' color='inherit' className={classes.navButtons}>
            <Link to={"/signup"}>Signup</Link>
          </Button>
          <Button aria-label='login user' color='inherit' className={classes.navButtons}>
            <Link to={"/login"}>Login</Link>
          </Button>
          <Button edge='end' color='inherit' className={classes.navButtons}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </Button>
          <Button edge='end' color='inherit' className={classes.navButtons}>
            <Link to={"/dashboard"}>Logout</Link>
          </Button>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
