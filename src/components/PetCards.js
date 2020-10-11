import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import https from 'https'
import {petFinderKey, petFinderSecret} from '../api/api-keys'

class PetCards extends Component {

  componentDidMount(){
    const petForm = document.querySelector('#pet-search')
    const animal = document.querySelector('#pet').value
    const zip = document.querySelector('#zip').value
    //@author: Athar Gulfam
    async function generateAccessToken() {
      try {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials")
        params.append("client_id", petFinderKey)
        params.append("client_secret", petFinderSecret)

          //// DO NOT DO THIS IF SHARING PRIVATE DATA WITH SERVICE
          //https://stackoverflow.com/questions/51363855/how-to-configure-axios-to-use-ssl-certificate
          

          const response = await fetch('https://api.petfinder.com/v2/oauth2/token',{
          method: "POST",    
          body: params,
          }).then(res => res.json()).then(data => console.log(data))
             
              // withCredentials: true,
              console.log('response.data.access_token = ', response.data.access_token)
              return response.data.access_token;
          }
          

         catch (error) {
          console.log('token error is coming===============================:');
          console.log('token error:', error);

      }
  }generateAccessToken();

  petForm.addEventListener('submit', ()=>{
    this.getRequest = async function (url, access_token) {
      try {
          var headers = {
              'Authorization': "Bearer " + access_token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          };

          const response = await axios({
              method: 'get',
              url: url,
              headers: headers,
          });

          return await response;

      } catch (error) {
          console.log('Failed to execute ' + url & ' Found Error as ', error);
      }
  }
  })

    
  }
  render(){
  
  
        
  
    return (
      <Card >
        <CardActionArea>
          <CardMedia
            
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
}





export default PetCards