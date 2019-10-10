import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Brewery = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.street}
                    <br />
                    {props.city}
                    <br />
                    {props.state}
                    <br />
                    {props.phone}
                    <br />
                    {props.website}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Brewery;