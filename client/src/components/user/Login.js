import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Container,
  Grow
} from "@material-ui/core";

import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

import { toast } from 'react-toastify';

const styles = (theme) => ({
  ...theme.styles
});

const Login = ({ classes, user: { loading, isAuthenticated }, loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Grow in timeout={800}>
      <Container maxWidth='sm' className={classes.form}>
        <img src={"./assets/todo-icon.png"} alt='Todo Icon' className={classes.image} />
        <Typography variant='h3' className={classes.pageTitle}>
          Login
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id='email'
            name='email'
            type='email'
            label='Email'
            className={classes.textField}
            value={email}
            onChange={handleChange}
            fullWidth
            required
          ></TextField>
          <TextField
            id='password'
            name='password'
            type='password'
            label='Password'
            className={classes.textField}
            value={password}
            onChange={handleChange}
            fullWidth
            required
          ></TextField>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={loading}
          >
            Login
            {loading && <CircularProgress size={30} className={classes.progress} />}
          </Button>
          <br />
          <small>
            Don't have an account? Sign up <Link to='/signup'>here</Link>
          </small>
        </form>
      </Container>
    </Grow>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { loginUser })(withStyles(styles)(Login));
