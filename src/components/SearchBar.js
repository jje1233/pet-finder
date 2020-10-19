import React, {useState, useContext} from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import {TokenContext} from './context'


  
const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    position: 'sticky',
    bottom: 0,
    left: 0,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    sel: {
        paddingBottom: '16px'
    },
    inpLbl:{
        paddingBottom: '16px'
    }
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
    const animal = document.querySelector('#pet').value
    const zip = document.querySelector('#zip').value
    const miles = document.querySelector('#miles').value
    const data = await fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}&distance=${miles}&page=${petInfo.page}`, {
    headers: {
        'Authorization': `Bearer ${petInfo.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((data => data.json()))
    petInfo.setPets(data)
    
    console.log(data)
    petInfo.setTotalResults(data.pagination.total_count) 
    petInfo.setLoaded(true)
  }
  const handleBreeds = async () => {
    const animal = document.querySelector('#pet').value
    const data = await fetch(`https://api.petfinder.com/v2/types/${animal}/breeds`, {
    headers: {
        'Authorization': `Bearer ${petInfo.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((data => data.json()))
    petInfo.setBreeds(data)
    console.log(data)
  }
  handleSubmit();
  handleBreeds();
}
  

return (
   
        <form className={classes.root} noValidate id='pet-search' autoComplete="off">
        <Grid container spacing={2}>
            <Grid item xs={6} sm={7}>
                <TextField fullWidth  id='zip' label="Enter a Zip Code" variant="filled" />
            </Grid>
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
                <option value={60}>60</option>
                </NativeSelect>
            </Grid>
            <Grid item xs={1}>
            <Button variant="contained" color="primary" type="submit" size='large' onClick={submitWrapperFunction}>
                 <SearchIcon />
            </Button>
            </Grid>
        </Grid>
        </form>
          ) 
              }
  
          
        
    
    
    
      




export default SearchBar