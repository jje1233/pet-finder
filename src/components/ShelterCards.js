import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem'
  },
  
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 6,
  },
});
function ShelterCards(props){
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <a href={props.url}>{props.org}</a>
          </Typography>
          <Typography variant="h5" component="h5">
          {props.distance} miles away
          </Typography>
        </CardContent>
      </Card>
    );
  }


export default ShelterCards