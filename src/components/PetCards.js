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
function PetCards() {
  
  const classes = useStyles();
  let petContext = useContext(TokenContext)
  
    return (
      petContext.loaded ? (<Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={petContext.pets.animals[0].photos.[0].large}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {petContext.pets.animals[0].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {petContext.pets.animals[0].description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" href={petContext.pets.animals[0].url}>
            Learn More
          </Button>
        </CardActions>
      </Card>) : (<p>hi</p>) 
      
    );
  }

export default PetCards