import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
      },
    },
    appbar: {
        backgroundColor: '#17252A'
    },
    title: { 
      flexGrow: 1,
      padding: '0.5rem'
    },
    list: {
     color: '#3AAFA9'
    },
    textArea: {
        margin: theme.spacing(1),
        width: '25ch',
        color: 'black'
    },
    listSubheader: {
        fontSize: '16px',
        color: '#DEF2F1'
    },
    btn: {
        padding: '14px',
        
    },
  }));
  
  

function Footer() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container>
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid item xs={3}>
                    <List className={classes.list}>
                    <Typography variant="h4" className={classes.title}>
                    Never miss a new pet
                    </Typography>
                    <Grid item>
                    <TextField  id="filled-basic" label="E-Mail" variant="filled"></TextField><Button variant='outlined' size='large' className={classes.btn}>Submit</Button>
                    </Grid>
                    
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