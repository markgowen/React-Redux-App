import React from 'react'
import { connect } from 'react-redux'

const Search = props => {
    return (
        <div>

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

export default connect(mapStateToProps)(Search);