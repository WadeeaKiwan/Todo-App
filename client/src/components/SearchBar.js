import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { TextField, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

import { connect } from "react-redux";
import { searchTodos } from "../redux/actions/todoActions";

const styles = (theme) => ({
  ...theme.styles,
  searchContainer: {
    marginBottom: "1.5rem"
  }
});

const SearchBar = ({ classes, searchTodos }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchTodos(searchText);
  }, [searchTodos, searchText]);

  const searchChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        id='search'
        name='searchText'
        placeholder='Search todos by category'
        fullWidth
        margin='normal'
        variant='outlined'
        className={classes.searchText}
        value={searchText}
        onChange={searchChangeHandler}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                setSearchText("");
              }}
            >
              <ClearIcon />
            </IconButton>
          )
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchTodos: PropTypes.func.isRequired
};

export default connect(null, { searchTodos })(withStyles(styles)(SearchBar));
