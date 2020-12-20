import React, {useState, useContext, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import {TokenContext} from './context'
import {isValidZip} from './ValidateZip'
import {Link} from 'react-router-dom'
import SearchResults from '../pages/SearchResults';



  
const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    
    backgroundColor: 'white',
    borderRadius: '8px'
    
    
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    sel: {
        paddingBottom: '16px',
        
    },
    inpLbl:{
        paddingBottom: '16px'
    },
    

},
}));

function SearchBar() {
 

const petInfo = useContext(TokenContext)
const classes = useStyles();


const [petName, setPetName] = useState({
    name: 'pet',
  });
const [miles, setMiles] = useState({
  miles: 100,
})
const petHandler = (event) => {
    const name = event.target.name
    setPetName({
      ...petName,
      name: event.target.value,
    });
  };

const mileHandler = (event) => {
  const miles = event.target.name
  setMiles({
    ...miles,
    miles: event.target.value,
  })
}
const  submitWrapperFunction = async (event) => {
  event.preventDefault()
  const handleSubmit = async () => {
    const zip = document.querySelector('#zip').value
    petInfo.setZip(zip)
    if(!isValidZip(zip)){
      alert('Invalid zip code')
      return;
    }
    const animal = document.querySelector('#pet').value
    petInfo.setAnimal(animal)
    
    const miles = document.querySelector('#miles').value
    petInfo.setMiles(miles)
    
    fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}&distance=${miles}&page=${petInfo.page}`, {
    headers: {
        'Authorization': `Bearer ${petInfo.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data =>{

    localStorage.setItem('pets', JSON.stringify(data))

    petInfo.setPets(data)
    
    console.log(data)
    petInfo.setTotalResults(data.pagination.total_count) 
    petInfo.setLoaded(true)
    })
    .catch(error => console.log('Error is: ', error)) 
    
  }
  const handleBreeds = async () => {
    const animal = document.querySelector('#pet').value
    fetch(`https://api.petfinder.com/v2/types/${animal}/breeds`, {
    headers: {
        'Authorization': `Bearer ${petInfo.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data =>{
      localStorage.setItem('petBreeds', JSON.stringify(data))
      petInfo.setBreeds(data)
      console.log(data)
    })
    .catch(error => console.log('Error is: ', error))
    
  }
  handleSubmit();
  handleBreeds();
}
  

return (
        <form className={classes.root} noValidate id='pet-search' autoComplete="off" >
          <Grid container spacing={2} direction='row'>
            <Grid item xs={6} >
                <TextField fullWidth  id='zip' label="Zip Code"/>
            </Grid>
            <Grid item xs={2} >
                <InputLabel className={classes.inpLbl} htmlFor="pet">Pet</InputLabel>
                <NativeSelect fullWidth  className={classes.sel}
                value={petName.name}
                onChange={petHandler}
                inputProps={{
                    name: 'pet',
                    id: 'pet',
                }}
                >
                <option aria-label="" value="" />
                <option value={'dog'}>Dog</option>
                <option value={'cat'}>Cat</option>
                </NativeSelect>
            </Grid>
            <Grid item xs={2} >
            <InputLabel className={classes.inpLbl} htmlFor="pet">Miles</InputLabel>
                <NativeSelect fullWidth  className={classes.sel} 
                value={miles.miles}
                onChange={mileHandler}
                inputProps={{
                    name: 'miles',
                    id: 'miles',
                }}
                >
                <option aria-label="" value="" />
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={250}>250</option>
                </NativeSelect>
            </Grid>
            <Grid item xs={2} >
              
                <button type="submit" className='search-btn' onClick={submitWrapperFunction}>
                <Link to='/searchresults'>
                  <i className="fas fa-search"></i>
                  </Link>
                </button>
              
            
            </Grid>
        </Grid>
        </form>
          ) 
              }
  
          
        
    
    
    
      




export default SearchBar