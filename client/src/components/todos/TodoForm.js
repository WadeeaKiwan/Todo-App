import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { TextField, Button, CircularProgress, Slide } from "@material-ui/core";

import { connect } from "react-redux";
import { createTodo } from "../../redux/actions/todoActions";

const styles = (theme) => ({
  ...theme.styles,
  todoForm: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
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

const TodoForm = ({ classes, todo: { loading }, createTodo }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: ""
  });

  const { title, description, category } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createTodo({ title, description, category });
  };

  return (
    <Slide in direction='up' timeout={1000}>
      <form noValidate onSubmit={handleSubmit} className={classes.todoForm}>
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
        ></TextField>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.todoButton}
          disabled={loading}
        >
          Add
          {loading && <CircularProgress size={30} className={classes.todoProgress} />}
        </Button>
      </form>
    </Slide>
  );
};

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired,
  createTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, { createTodo })(withStyles(styles)(TodoForm));
