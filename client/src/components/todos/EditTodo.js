import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grow, Container, Typography, CircularProgress } from "@material-ui/core";

import { connect } from "react-redux";
import { getTodo } from "../../redux/actions/todoActions";
import TodoForm from "./TodoForm";

const styles = (theme) => ({
  ...theme.styles,
  editTodoContainer: {},
  todoForm: {
    display: "flex",
    flexDirection: "column"
  }
});

const EditTodo = ({ classes, todo, loading, getTodo }) => {
  const { todoId } = useParams();

  useEffect(() => {
    getTodo(todoId);
  }, [getTodo, todoId]);

  return (
    <Grow in timeout={800}>
      <Container maxWidth='sm' className={classes.editTodoContainer}>
        {loading ? (
          <CircularProgress size={150} className={classes.spinnerDiv} />
        ) : (
          <React.Fragment>
            <Typography variant='h4' color='primary'>
              Edit Your Todo Item
            </Typography>
            {todo && <TodoForm edit={true} className={classes.todoForm} />}
          </React.Fragment>
        )}
      </Container>
    </Grow>
  );
};

EditTodo.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo.todo,
  loading: state.todo.loading
});

export default connect(mapStateToProps, { getTodo })(withStyles(styles)(EditTodo));
