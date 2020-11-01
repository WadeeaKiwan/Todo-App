import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  IconButton,
  Tooltip
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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
  editButton: {
    position: "absolute",
    top: 5,
    right: 60,
    zIndex: 1
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1
  },
  todoItemDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryBadge: {
    color: "white",
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 5
  }
});

const TodoItem = ({ classes, todo, markTodo, deleteTodo }) => {
  const [done, setDone] = useState(false);
  dayjs.extend(relativeTime);

  const handleTodoDone = () => {
    setDone(!done);
    markTodo(todo.id, { done });
  };

  return (
    <Tooltip title="Click to mark the task" aria-label="mark to todo">
      <Grid item xs={12} className={classes.todoContainer}>
        <Slide in direction='up' timeout={1000}>
          <Card className={classes.todoCard}>
            <Link to={`/update-todo/${todo.id}`}>
              <Tooltip title='Edit' aria-label="edit">
                <IconButton className={classes.editButton}>
                  <EditIcon color='primary' />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip title='Delete' aria-label="delete">
              <IconButton
                color='secondary'
                onClick={() => deleteTodo(todo.id)}
                className={classes.deleteButton}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <CardActionArea onClick={handleTodoDone}>
              <CardContent
                className={`${todo.done ? classes.completed : classes.inCompleted} ${classes.cardContent
                  }`}
              >
                <Typography variant='h5' color='primary' gutterBottom>
                  {todo.title}
                </Typography>
                <Typography gutterBottom>
                  <strong>Description:</strong> {todo.description}
                </Typography>
                <div className={classes.todoItemDetails}>
                  <Typography color='textSecondary'>
                    <strong>created</strong> {dayjs(todo.createdAt).fromNow()}
                  </Typography>
                  <Typography className={classes.categoryBadge}>{todo.category}</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Slide>
      </Grid>
    </Tooltip>
  );
};

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  markTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default connect(null, { markTodo, deleteTodo })(withStyles(styles)(TodoItem));
