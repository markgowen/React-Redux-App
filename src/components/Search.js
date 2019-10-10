import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBrewery } from '../actions'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing(1)
  },
  iconButton: {
    padding: 10
  }
}));

const Search = props => {

  const classes = useStyles();

  // state
  const [state, setState] = useState();

  const handleChanges = e => {
    e.preventDefault();
    setState(e.target.value);
  }

  const search = e => {
      props.searchBrewery(state);
  }

  return (
    <form className={classes.container} onSubmit={search}>
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon type='Submit'/>
      </IconButton>
      <Input
        value={state}
        onChange={handleChanges}
        placeholder="search by state"
        className={classes.input}
        inputProps={{
          'aria-label': 'description'
        }}
      />
      
    </form>
  );
};

const mapStateToProps = state => {
  return {
    breweries: state.breweries,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { searchBrewery })(Search);
