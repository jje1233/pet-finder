import React, {useState, useContext} from 'react'
import TokenContext from './context'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio'
import {Link} from 'react-router-dom'




//Currently being worked on 

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

 

  
function FilterBar() {
    const petInfo = useContext(TokenContext)

    const [state, setState] = useState({
        baby: false,
        young: false,
        adult: false,
        senior: false,
        female: false, 
        male: false, 
        small: false,
        medium: false,
        large: false,
        xLarge: false,

      });
      
      

      const addFilters = async (e) => {
          e.preventDefault()

        const breed = document.querySelector('#breed').value
        
        const data = await fetch (`https://api.petfinder.com/v2/animals?type=${petInfo.animal}&location=${petInfo.zip}&distance=${petInfo.miles}&breed=${petInfo.selectedBreed}`,{
          headers: {
              'Authorization': `Bearer ${petInfo.token}`,
              'Content-Type': 'application/x-www-form-urlencoded'
              }
          })
          .then(( data => data.json()))
          petInfo.setFilteredBreed(data)
          petInfo.setLoaded(true)
          console.log(data)
    }
        

      
      const handleBreed = (event) => {
        petInfo.setSelectedBreed(event.target.value);
      };
      
    

const classes = useStyles();

  return (
    <div className={classes.root}>
        <form>
            {petInfo.loaded ? ( 
            <>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Breed</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   
                    <RadioGroup row id='breed' style={{height: '600px', overflow: 'scroll'}} value={petInfo.selectedBreed}>
                    
                        {petInfo.breeds.breeds.map(breed => {
                            return(
                            <FormControlLabel style={{width: '25ch'}} key={breed.name}
                            control={
                            <Radio
                                value={breed.name}
                                onChange={handleBreed}
                                name={breed.name}
                                color="primary"
                            />
                            }
                            label={breed.name}
                        />
                            )
                        })}
                    </RadioGroup>
                </AccordionDetails>
                    
            </Accordion> <button style={{width: '100%', height: '60px', backgroundColor: '#17252A', fontSize: '20px', outline: 'none', border: 'none', borderRadius: '8px', cursor: 'pointer'}}onClick={addFilters}><Link to='/filteredresults' style={{textDecoration: 'none', color: '#3AAFA9'}}>APPLY FILTER</Link></button></>) : ('')}
           

            
        </form>
    </div>
  );
}

export default FilterBar