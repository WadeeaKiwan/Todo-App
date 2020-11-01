import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { TextField, Button, CircularProgress, Slide } from "@material-ui/core";

import { connect } from "react-redux";
import { createTodo, updateTodo } from "../../redux/actions/todoActions";

const styles = (theme) => ({
  ...theme.styles,
  todoForm: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: "0.5rem 0"
    }
  },
  todoButton: {
    marginTop: 10,
    marginBottom: 10,
    position: "relative"
  },
  todoProgress: {
    position: "absolute"
  }
});

const TodoForm = ({ classes, loading, todo, createTodo, updateTodo, edit }) => {
  const [formData, setFormData] = useState({
    title: edit && todo ? todo.title : "",
    description: edit && todo ? todo.description : "",
    category: edit && todo ? todo.category : ""
  });

  const history = useHistory();

  const { title, description, category } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (edit) {
      updateTodo(todo.id, { title, description, category });
      history.replace("/dashboard");
    } else {
      createTodo({ title, description, category });
    }
    setFormData({ title: "", description: "", category: "" });
  };

  return (
    <Slide in direction='up' timeout={1000}>
      <form onSubmit={handleSubmit} className={classes.todoForm}>
        <TextField
          id='title'
          name='title'
          type='text'
          label='Title'
          className={classes.todoTextField}
          value={title}
          onChange={handleChange}
          fullWidth
          variant='outlined'
          required
        ></TextField>
        <TextField
          id='description'
          name='description'
          type='text'
          label='Description'
          className={classes.todoTextField}
          value={description}
          onChange={handleChange}
          fullWidth
          variant='outlined'
          required
        ></TextField>
        <TextField
          id='category'
          name='category'
          type='text'
          label='Category'
          className={classes.todoTextField}
          value={category}
          onChange={handleChange}
          fullWidth
          variant='outlined'
          required
        ></TextField>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.todoButton}
          disabled={loading}
        >
          {edit ? "Submit" : "Add"}
          {loading && <CircularProgress size={30} className={classes.todoProgress} />}
        </Button>
        {edit && (
          <Button
            type='button'
            variant='contained'
            color='secondary'
            className={classes.todoButton}
            onClick={() => history.push("/dashboard")}
          >
            Cancel
          </Button>
        )}
      </form>
    </Slide>
  );
};

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  createTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo.todo,
  loading: state.todo.loading
});

export default connect(mapStateToProps, { createTodo, updateTodo })(withStyles(styles)(TodoForm));
