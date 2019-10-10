import React from 'react'


const Brewery = props => {
    return (
        <div>
            {props.brewery.name}
            {props.brewery.street}
            {props.brewery.city}
            {props.brewery.state}
            {props.brewery.phone}
            {props.brewery.website_url}
        </div>
    )
}

export default Brewery;