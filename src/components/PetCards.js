import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TokenContext from './context'
import PetsIcon from '@material-ui/icons/Pets';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  media: {
    height: 360,
  },
});
function PetCards(props) {
  
  const classes = useStyles();
  let petInfo = useContext(TokenContext)
  
    return (
      petInfo.loaded ? (<Card >
        <CardActionArea href={props.url} target="_blank" rel="noopener" rel="noreferrer" onClick={() => petInfo.setName(props.name), petInfo.setImage(props.img)}>
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
          
          <Button size="small" color="primary" href={props.url} target="_blank" rel="noopener" rel="noreferrer">
            Learn More
          </Button>
        </CardActions>
      </Card>) : (<p> </p>) 
      
    );
  }

export default PetCards