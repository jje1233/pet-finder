import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TokenContext from './context'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 260,
  },
});
function PetCards(props) {
  
  const classes = useStyles();
  let {loaded} = useContext(TokenContext)
  
    return (
      loaded ? (<Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" href={props.url}>
            Learn More
          </Button>
        </CardActions>
      </Card>) : (<p>hi</p>) 
      
    );
  }

export default PetCards