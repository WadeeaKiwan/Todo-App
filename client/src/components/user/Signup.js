import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Container,
  Grow,
  FormHelperText
} from "@material-ui/core";

import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.styles
});

// const errorHandler = (errors) => {
//   let error = {};

//   errors.map((error) => {
//     if (error.param) {
//       switch (error.param) {
//         case "name":
//           error = error.msg;
//           console.log(error.msg);
//           break;
//         case "email":
//           error = error.msg;
//           console.log(error.msg);
//           break;
//         case "password":
//           error = error.msg;
//           console.log(error.msg);
//           break;
//         default:
//           return;
//       }
//     } else {
//       error = error.msg;
//       console.log(error.msg);
//     }
//   });
//   return error;
// };

const Signup = ({ classes, user: { loading, isAuthenticated, errors }, signupUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errorsData, setErrorsData] = useState();

  useEffect(() => {
    if (errors) {
      setErrorsData(errors);
    }
  }, [errors]);
  console.log(errorsData);
  // console.log(errorsData && errorsData.find((error) => error.param === "name").msg);

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return {
        msg: "Passwords do not match!"
      };
    } else {
      await signupUser({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Grow in timeout={800}>
      <Container maxWidth='sm' className={classes.form}>
        <img src={"./assets/todo-icon.png"} alt='Todo Icon' className={classes.image} />
        <Typography variant='h3' className={classes.pageTitle}>
          Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id='name'
            name='name'
            type='text'
            label='Name'
            className={classes.textField}
            value={name}
            onChange={handleChange}
            fullWidth
            required
            error={errorsData && errorsData.some((error) => error.param === "name")}
            helperText={errorsData && errorsData.length && errorsData.find((error) => error.param === "name").msg}
          ></TextField>
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
            error={errorsData && errorsData.find((error) => error.param === "email")}
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
            error={errorsData && errorsData.find((error) => error.param === "password")}
          // helperText={errorsData.find((error) => error.param === "password")}
          ></TextField>
          <TextField
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            label='Confirm Password'
            className={classes.textField}
            value={confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          // error={password !== confirmPassword}
          ></TextField>
          {errors &&
            errors.map(
              (error) =>
                !error.param && (
                  <Typography key={error.msg} variant='body2' className={classes.customError}>
                    {error.msg}
                  </Typography>
                )
            )}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={loading}
          >
            Signup
            {loading && <CircularProgress size={30} className={classes.progress} />}
          </Button>
          <br />
          <small>
            Already have an account? Login <Link to='/login'>here</Link>
          </small>
        </form>
      </Container>
    </Grow>
  );
};

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(Signup));
