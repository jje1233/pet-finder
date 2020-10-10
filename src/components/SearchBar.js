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
    name: '',
  });
const handleChange = (event) => {
    const name = event.target.name;
    setPetName({
      ...petName,
      [name]: event.target.value,
    });
  };


return (
    
    <form className={classes.root} noValidate autoComplete="off">
    <Grid container spacing={2}>
        <Grid item xs={7} sm={8}>
            <TextField fullWidth id="filled-basic" label="Search by Zip Code, City, or State" variant="filled" />
        </Grid>
        <Grid item xs={3} sm={3}>
            <InputLabel className={classes.inpLbl} htmlFor="pet-native-helper">pet</InputLabel>
            <NativeSelect fullWidth  className={classes.sel}
            value={petName.name}
            onChange={handleChange}
            inputProps={{
                name: 'pet',
                id: 'pet-native-helper',
            }}
            >
            <option aria-label="select a pet" value="Select a pet" />
            <option value={10}>Dog</option>
            <option value={20}>Cat</option>
            </NativeSelect>
        </Grid>
        <Grid item xs={2} sm={1}>
        <Button variant="contained" color="primary">
             <SearchIcon />
        </Button>
        </Grid>
    </Grid>
    
    </form>
);
}


export default SearchBar