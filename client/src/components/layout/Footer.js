import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.styles,
  footer: {
    height: "2rem",
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  footerText: {
    textAlign: "center",
    color: "white"
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerText}>&copy; Copyright Wadeea Kiwan 2020</Typography>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
