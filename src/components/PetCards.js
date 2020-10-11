import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'



const useStyles = makeStyles({
  root: {
   
  },
  media: {
    height: 140,
  },
});

window.onload= function (){
  const petForm = document.querySelector('#pet-search')

petForm.addEventListener('submit', getAnimals)

function getAnimals(e){
  e.preventDefault()

  const animal = document.querySelector('#pet').value
  const zip = document.querySelector('#zip').value

  axios.get(`https://cors-anywhere.herokuapp.com/GET https://api.petfinder.com/v2/animals/find?type=${animal}&location=${zip}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
  }

function PetCards() {
  const classes = useStyles();


  return (
    <Card >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}


export default PetCards