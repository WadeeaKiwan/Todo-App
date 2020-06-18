import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import TodoItem from "./TodoItem";

const styles = (theme) => ({
  ...theme.styles,
  todoListContainer: {
    padding: 0
  }
});

const TodoLIst = ({ classes, todos, loading }) => {
  return (
    <Container maxWidth='lg' className={classes.todoListContainer}>
      {loading ? (
        <CircularProgress size={150} className={classes.spinnerDiv} />
      ) : (
        <React.Fragment>
          {todos.length ? (
            <Grid container direction='column' spacing={2}>
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </Grid>
          ) : (
            <div className={classes.spinnerDiv}>
              <Typography variant='h4'>No todo items found.</Typography>
            </div>
          )}
        </React.Fragment>
      )}
    </Container>
  );
};

TodoLIst.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(TodoLIst);
