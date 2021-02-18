import React, {useState, useStyles, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import {TokenContext} from './context'
import {isValidZip} from './ValidateZip'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';


function HomeShelterSearch(){
    
const petInfo = useContext(TokenContext)

  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
const [miles, setMiles] = useState({
  miles: 100,
})


const mileHandler = (event) => {
  const miles = event.target.name
  setMiles({
    ...miles,
    miles: event.target.value,
  })
}

  
  const handleSubmit = async (e) => {
      e.preventDefault();
    const zip = document.querySelector('#orgZip').value
    petInfo.setOrgZip(zip)
    if(!isValidZip(zip)){
      alert('Invalid zip code')
      return;
    }
    
    const miles = document.querySelector('#miles').value
    petInfo.setMiles(miles)
    
    await fetch(`https://api.petfinder.com/v2/organizations?location=${zip}&distance=${miles}`, {
    headers: {
        'Authorization': `Bearer ${petInfo.token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data =>{

    localStorage.setItem('organizations', JSON.stringify(data))

    petInfo.setOrganizations(data)
    
    console.log(data)
    
    petInfo.setLoadedOrganizations(true)
    })
    .catch(error => console.log('Error is: ', error)) 
    }
    
    
    return(
        <div className='home-shelter-search-wrapper'>
            <div className='home-shelter-search-heading'>
                <p>Rather browse in person? Find a shelter near you</p>
            </div>
            <div className='home-shelter-search-container'>
                <form className='home-shelter-search-bar'>
                  <FormControl >
                    <TextField required fullWidth  id='orgZip' label="Zip Code" />
                      <InputLabel  htmlFor="miles">Miles</InputLabel>
                      <NativeSelect fullWidth required  
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
                      <button type="submit" className='search-btn' onClick={handleSubmit}>
                      
                      <i className="fas fa-search"></i>
                      </button>
                  </FormControl>
                    
                    
                   
                    
                    
                </form>
                {petInfo.loadedOrganizations ? (
                        <div className='organizations'>

                            {petInfo.organizations.organizations.map(org =>{
                                return  <div className='organization-row' key={org.id}>
                                            <div><a href={org.url}>{org.name}</a> || {org.email} || {org.distance} miles away</div> 
                                        </div>
                             })}   
                        </div>
                        
                            
                        )
                     : ('')
                    
                    }
            </div>

        </div>
    )
}


export default HomeShelterSearch