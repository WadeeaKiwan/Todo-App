import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Grow } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.styles,
  containerHeader: {
    marginBottom: "1rem",
    color: theme.palette.primary.main
  }
});

const Home = ({ classes }) => {
  return (
    <Grow in timeout={800}>
      <Container maxWidth='lg' className={classes.appContainer}>
        <img src={"./assets/todo-icon.png"} alt='Todo Icon' className={classes.image} />
        <Typography variant='h2' className={classes.containerHeader}>
          Welcome To The Todo App
        </Typography>
        <Typography>
          Please <Link to={"/login"}>login</Link> to make your own todo list
        </Typography>
      </Container>
    </Grow>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
