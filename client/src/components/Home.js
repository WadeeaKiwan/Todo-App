import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Grow } from "@material-ui/core";

import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.styles,
  containerHeader: {
    marginBottom: "1rem",
    color: theme.palette.primary.main
  }
});

const Home = ({ classes, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Grow in timeout={800}>
      <Container maxWidth='lg'>
        <img src={"./assets/todo-icon.png"} alt='Todo Icon' className={classes.image} />
        <Typography variant='h2' className={classes.containerHeader}>
          Welcome To The Todo App
        </Typography>
        <small>
          Please <Link to={"/login"}>login</Link> to make your own todo list
        </small>
      </Container>
    </Grow>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, {})(withStyles(styles)(Home));
