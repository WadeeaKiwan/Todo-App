import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Slide,
  CardActionArea,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import { markTodo, deleteTodo } from "../../redux/actions/todoActions";

const styles = (theme) => ({
  ...theme.styles,
  todoContainer: {
    display: "grid",
    textAlign: "left"
  },
  completed: {
    textDecoration: "line-through"
  },
  inCompleted: {
    textDecoration: "none"
  },
  todoCard: {
    display: "flex",
    position: "relative"
  },
  deleteButton: {
    position: "absolute",
    left: "90%",
    zIndex: 1
  },
  todoItemDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const TodoItem = ({ classes, todo, markTodo, deleteTodo }) => {
  const [done, setToggleDone] = useState(false);
  dayjs.extend(relativeTime);

  const handleTodoDone = () => {
    setToggleDone(!done);
    markTodo(todo.id, { done });
  };

  return (
    <Grid item xs={12} className={classes.todoContainer}>
      <Slide in direction='up' timeout={1000}>
        <Card className={classes.todoCard}>
          <IconButton onClick={() => deleteTodo(todo.id)} className={classes.deleteButton}>
            <DeleteIcon />
          </IconButton>
          <CardActionArea onClick={handleTodoDone}>
            <CardContent
              className={`${todo.done ? classes.completed : classes.inCompleted} ${
                classes.cardContent
              }`}
            >
              <Typography variant='h5' color='primary'>
                {todo.title}
              </Typography>
              <Typography>{todo.description}</Typography>
              <div className={classes.todoItemDetails}>
                <Typography color='textSecondary'>{dayjs(todo.createdAt).fromNow()}</Typography>
                <Typography>{todo.category}</Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
    </Grid>
  );
};

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  markTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default connect(null, { markTodo, deleteTodo })(withStyles(styles)(TodoItem));
