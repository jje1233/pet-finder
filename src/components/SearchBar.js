import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'


  
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
const classes = useStyles();

const [petName, setPetName] = useState({
    name: 'pet',
  });
const handleChange = (event) => {
    const name = event.target.name;
    setPetName({
      ...petName,
      name: event.target.value,
    });
  };


return (
    
    <form className={classes.root} noValidate id='pet-search' autoComplete="off">
    <Grid container spacing={2}>
        <Grid item xs={7} sm={8}>
            <TextField fullWidth  id='zip' label="Enter a Zip Code" variant="filled" />
        </Grid>
        <Grid item xs={3} sm={3}>
            <InputLabel className={classes.inpLbl} htmlFor="pet">Pet</InputLabel>
            <NativeSelect fullWidth  className={classes.sel} 
            value={petName.name}
            onChange={handleChange}
            inputProps={{
                name: 'pet',
                id: 'pet',
            }}
            >
            <option aria-label="" value="" />
            <option value={'Dog'}>Dog</option>
            <option value={'Cat'}>Cat</option>
            </NativeSelect>
        </Grid>
        <Grid item xs={2} sm={1}>
        <Button variant="contained" color="primary" type="submit">
             <SearchIcon />
        </Button>
        </Grid>
    </Grid>
    
    </form>
);
}


export default SearchBar