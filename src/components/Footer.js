import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    appbar: {
        backgroundColor: '#E7717D'
    },
    title: { 
      flexGrow: 1,
      padding: '0.5rem'
    },
    list: {
     color: '#12333D'
    },
    textArea: {
        margin: theme.spacing(1),
        width: '25ch',
        color: 'black'
    },
    listSubheader: {
        fontSize: '16px'
    }
  }));
  
function ListItemLink(...props) {
    return <ListItem button component="a" {...props}/>;
}

function Footer() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container xs={12}>
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid item xs={3}>
                    <List className={classes.list}>
                    <Typography variant="h4" className={classes.title}>
                    Never miss a new pet
                    </Typography>
                    <><TextField  id="filled-basic" label="E-Mail" variant="filled" className={classes.textArea}></TextField><Button variant='outlined' size='large'>Submit</Button></>
                    </List>
                </Grid>
                
                <Grid item xs={3}>
                    <List className={classes.list} component="nav" subheader={ <><ListSubheader component='div' id='list-subheader' className={classes.listSubheader}>ABOUT</ListSubheader><Divider/></>}>
                    <ListItem button component='a'>
                        <ListItemText>Our Mission</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>FAQs</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Terms of Service</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                    </List>
                </Grid>
                
                <Grid item xs={3} >
                    <List className={classes.list} component="nav" subheader={ <><ListSubheader component='div' id='list-subheader' className={classes.listSubheader}>PET ADOPTION</ListSubheader><Divider/></>}>
                    <ListItem button component='a'>
                        <ListItemText>Dog Adoption</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Cat Adoption</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Search Shelters</ListItemText>
                    </ListItem>
                    </List>
                </Grid>
                
                <Grid item xs={3}>
                    <List className={classes.list} component="nav" subheader={ <><ListSubheader component='div' id='list-subheader' className={classes.listSubheader}>PET CARE TOPICS</ListSubheader><Divider/></>}>
                    <ListItem button component='a'>
                        <ListItemText>Dog Care</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Dog Breeds</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Cat Care</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Cat Breeds</ListItemText>
                    </ListItem>
                    <ListItem button component='a'>
                        <ListItemText>Pet Care Videos</ListItemText>
                    </ListItem>
                    </List>
                </Grid>
            </Toolbar>   
        </AppBar>
        </Grid>  
      </div>
    );
}

export default Footer