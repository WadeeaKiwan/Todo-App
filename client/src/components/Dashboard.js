import React, { useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import { withStyles } from "@material-ui/core/styles";
import { Grow, Grid, Paper, Container, Typography } from "@material-ui/core";
import { Mail, CalendarToday } from "@material-ui/icons";

import TodoList from "../components/todos/TodoList";

import { connect } from "react-redux";
import { getTodosByUserId } from "../redux/actions/todoActions";
import TodoForm from "./todos/TodoForm";

const styles = (theme) => ({
  ...theme.styles,

  profileImage: {
    marginTop: "1rem",
    maxWidth: 150,
    borderRadius: "50%"
  },
  profileDetails: {
    textAlign: "left",
    padding: "1rem",
    "& p": {
      "& svg": {
        verticalAlign: "middle"
      }
    }
  }
});

const Dashboard = ({ classes, user, todos, loading, getTodosByUserId }) => {
  useEffect(() => {
    getTodosByUserId(user.id);
  }, [getTodosByUserId, user.id]);

  return (
    <Grow in timeout={800}>
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Paper>
              <img src={user.image} alt='profile' className={classes.profileImage} />
              <div className={classes.profileDetails}>
                <Typography variant='h5' color='primary' gutterBottom>
                  {user.name}
                </Typography>
                <Typography color='primary' gutterBottom>
                  <Mail /> {user.email}
                </Typography>
                <Typography color='primary' gutterBottom>
                  <CalendarToday /> Joined {dayjs(user.createdAt).format("MMM YYYY")}
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item sm={8} xs={12}>
            <TodoForm edit={false} />
            <TodoList todos={todos} loading={loading} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getTodosByUserId: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  todos: state.todo.todos,
  loading: state.todo.loading
});

export default connect(mapStateToProps, { getTodosByUserId })(withStyles(styles)(Dashboard));
