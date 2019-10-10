import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import { fetchBrewery } from '../actions'
import Brewery from './Brewery'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '75px auto'
      },
    gridItem: {
        padding: theme.spacing(2)
      },
  }));

const BreweryCard = props => {
    const classes = useStyles();

    useEffect(() => {
        if (props.breweries.length === 0) {
        props.fetchBrewery();
        }
    }, []);
    
    if (props.isFetching) {
        return <h2>Loading breweries...</h2>
    }

    return (
        <Grid container className={classes.root} justify="center">
                {props.error && <p>{props.error}</p>}
                {props.breweries.map(item => {
                    return (
                        <Grid item className={classes.gridItem} s>
                        <Brewery 
                            key={item.id} 
                            name={item.name}
                            street={item.street}
                            city={item.city}
                            state={item.state}
                            phone={item.phone}
                            website={item.website_url}
                        />
                    </Grid>
                    );
                })}
            </Grid>
    );
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchBrewery })(BreweryCard);

