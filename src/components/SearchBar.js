import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


  
const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    sel: {
        paddingBottom: '16px'
    },
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
    <Grid container>
        <Grid item xs={6}>
            <TextField fullWidth id="filled-basic" label="Search by Zip Code, City, or State" variant="filled" />
        </Grid>
        <Grid item xs={2}>
            <InputLabel htmlFor="pet-native-helper">Looking for</InputLabel>
            <NativeSelect className={classes.sel}
            value={petName.name}
            onChange={handleChange}
            inputProps={{
                name: 'petName',
                id: 'pet-native-helper',
            }}
            >
            <option aria-label="None" value="" />
            <option value={10}>Dog<i class="fas fa-dog"></i></option>
            <option value={20}>Cat<i class="fas fa-cat"></i></option>
            </NativeSelect>
            
        </Grid>
    </Grid>
    
    </form>
);
}


export default SearchBar