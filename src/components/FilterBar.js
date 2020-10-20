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
      const [selectedBreed, setSelectedBreed] = useState('')
      const handleBreed = (event) => {
        setSelectedBreed(event.target.value);
      };

      const addFilters = async (e, pageNumber) => {
          e.preventDefault()
        const animal = document.querySelector('#pet').value
          const zip = document.querySelector('#zip').value
          const miles = document.querySelector('#miles').value
        const breed = document.querySelector('#breed').value
        const age = document.querySelector('#age').value
        const gender = document.querySelector("#gender").value
        const size = document.querySelector("#size").value
        const data = await fetch (`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}&distance=${miles}&page=${pageNumber}&breed=${breed}&size=${size}$age=${age}&gender=${gender}`,{
          headers: {
              'Authorization': `Bearer ${petInfo.token}`,
              'Content-Type': 'application/x-www-form-urlencoded'
              }
          })
          .then(( data => data.json()))
          petInfo.setFilteredBreeds(data)
          
          console.log(data)
          petInfo.setPage(pageNumber)
          petInfo.setLoaded(true)
    }
        


      

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      }

      const { baby, young, adult, senior, female, male, small, medium, large, xLarge, breed} = state;
    

const classes = useStyles();

  return (
    <div className={classes.root}>
        <form>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Age</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup row id='age' >
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={baby}
                                onChange={handleChange}
                                name="baby"
                                color="primary"
                            />
                            }
                            label="Baby"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={young}
                                onChange={handleChange}
                                name="young"
                                color="primary"
                            />
                            }
                            label="Young"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={adult}
                                onChange={handleChange}
                                name="adult"
                                color="primary"
                            />
                            }
                            label="Adult"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={senior}
                                onChange={handleChange}
                                name="senior"
                                color="primary"
                            />
                            }
                            label="Senior"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

            {petInfo.loaded ? ( 
            
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Breed</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   
                    <RadioGroup row id='breed' style={{height: '600px', overflow: 'scroll'}} value={selectedBreed}>
                    
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
            </Accordion>) : ('')}
           


            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>Gender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup row id='gender'>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={female}
                            onChange={handleChange}
                            name="female"
                            color="primary"
                        />
                        }
                        label="Female"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={male}
                            onChange={handleChange}
                            name="male"
                            color="primary"
                        />
                        }
                        label="Male"
                    />
                </FormGroup>
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                <Typography className={classes.heading}>Size</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup row id='size'>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={small}
                            onChange={handleChange}
                            name="small"
                            color="primary"
                        />
                        }
                        label="Small"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={medium}
                            onChange={handleChange}
                            name="medium"
                            color="primary"
                        />
                        }
                        label="Medium"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={large}
                            onChange={handleChange}
                            name="large"
                            color="primary"
                        />
                        }
                        label="Large"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={xLarge}
                            onChange={handleChange}
                            name="xLarge"
                            color="primary"
                        />
                        }
                        label="XLarge"
                    />
                </FormGroup>
                </AccordionDetails>
            </Accordion>

            <button onClick={addFilters}>yo</button>
        </form>
    </div>
  );
}

export default FilterBar