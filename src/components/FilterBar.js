import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
    const [age, setAge] = useState({
        baby: false,
        young: false,
        adult: false,
        senior: false,
      });

      const handleAge = (event) => {
        setAge({ ...age, [event.target.name]: event.target.checked });
      }
    
      const [breed, setBreed] = useState({
        baby: false,
        young: false,
        adult: false,
        senior: false,
      });

      const handleBreed = (event) => {
        setBreed({ ...breed, [event.target.name]: event.target.checked });
      }

      const [gender, setGender] = useState({
        female: false,
        male: false,
      });

      const handleGender = (event) => {
        setGender({ ...gender, [event.target.name]: event.target.checked });
      }


      const [size, setSize] = useState({
        small: false,
        medium: false,
        large: false,
        xLarge: false,
      });

      const handleSize = (event) => {
        setSize({ ...size, [event.target.name]: event.target.checked });
      }


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
                    <FormGroup row>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={age.baby}
                                onChange={handleAge}
                                name="Baby"
                                color="primary"
                            />
                            }
                            label="Baby"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={age.young}
                                onChange={handleAge}
                                name="Young"
                                color="primary"
                            />
                            }
                            label="Young"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={age.adult}
                                onChange={handleAge}
                                name="Adult"
                                color="primary"
                            />
                            }
                            label="Adult"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={age.senior}
                                onChange={handleAge}
                                name="Senior"
                                color="primary"
                            />
                            }
                            label="Senior"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Breed</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={breed.small}
                            onChange={handleBreed}
                            name="Small"
                            color="primary"
                        />
                        }
                        label="Small"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={breed.medium}
                            onChange={handleBreed}
                            name="Medium"
                            color="primary"
                        />
                        }
                        label="Medium"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={breed.large}
                            onChange={handleBreed}
                            name="Large"
                            color="primary"
                        />
                        }
                        label="Large"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={breed.xLarge}
                            onChange={handleBreed}
                            name="XLarge"
                            color="primary"
                        />
                        }
                        label="XLarge"
                    />
                </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>Gender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={gender.female}
                            onChange={handleGender}
                            name="Female"
                            color="primary"
                        />
                        }
                        label="Female"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={gender.male}
                            onChange={handleGender}
                            name="Male"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Size</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={size.small}
                            onChange={handleSize}
                            name="Small"
                            color="primary"
                        />
                        }
                        label="Small"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={size.medium}
                            onChange={handleSize}
                            name="Medium"
                            color="primary"
                        />
                        }
                        label="Medium"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={size.large}
                            onChange={handleSize}
                            name="Large"
                            color="primary"
                        />
                        }
                        label="Large"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={size.xLarge}
                            onChange={handleSize}
                            name="XLarge"
                            color="primary"
                        />
                        }
                        label="XLarge"
                    />
                    
                    
                    
                
                </FormGroup>
                </AccordionDetails>
            </Accordion>
        </form>
    </div>
  );
}

export default FilterBar