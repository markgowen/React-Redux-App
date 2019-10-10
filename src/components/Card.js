import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchBrewery } from '../actions'
import Brewery from './Brewery'

const BreweryCard = props => {
    useEffect(() => {
        if (props.breweries.length === 0) {
        props.fetchBrewery();
        }
    }, []);
    
    if (props.isFetching) {
        return <h2>Loading breweries...</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.breweries.map(item => (
                <Brewery key={item.id} brewery={item} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchBrewery })(BreweryCard);

