import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TokenContext from './context'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});


function PetCards(props) {
  
  const classes = useStyles();
  let petInfo = useContext(TokenContext)

  function petAssignHandler() {
    petInfo.setName(props.name); 
    petInfo.setImage(props.detailImg); 
    petInfo.setDesc(props.desc); 
    petInfo.setAttributes(props.attributes); 
    petInfo.setStatus(props.status);
    petInfo.setPetUrl(props.url);
    petInfo.setBreed(props.breed);
    petInfo.setSize(props.size);
    petInfo.setGender(props.gender);
    
    
      localStorage.setItem('petDetails', 
      JSON.stringify(
        {
          name: props.name,
          image: props.detailImg,
          breed: props.breed,
          desc: props.desc,
          attributes: props.attributes,
          status: props.status,
          url: props.url,
          gender: props.gender,
          size: props.size
        }
      )
    )
    
  }
    return (
      petInfo.loaded ? (<Card >
        <CardActionArea
          href={props.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          
          onClick={petAssignHandler} 
        >
          <Link to='/petdetails'>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.name}
          />
          </Link>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.gender} || {props.size} || {props.breed} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Button size="small" color="primary" href={props.url} target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>
        </CardActions>
      </Card>) : (<p> </p>) 
      
    );
  }

export default PetCards