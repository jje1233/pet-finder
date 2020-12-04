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
import {useMediaQuery} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
        outline:'none',
        border: 'none',
        width: '24ch',
        padding: '16px',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    },
    listSubheader: {
        fontSize: '16px',
        color: '#DEF2F1'
    },
    btn: {
        padding: '16px',
        outline: 'none',
        border: 'none',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#3AAFA9'
        
    },
  }));
  
  

function Footer() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 900px)')
    return (
      <div className={classes.root}>
        <Grid container >
        <AppBar position="static" className={classes.appbar}>
            <Toolbar style={isMobile ? {flexDirection: 'column', justifyContent: 'left'} : {flexDirection: 'row'}}>
                
                
                <Grid item xs={12} md={3}>
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
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    </List>
                </Grid>
                
                <Grid item xs={12} md={3}>
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
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    <ListItem> </ListItem>
                    </List>
                </Grid>
                
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={3}>
                    <List className={classes.list}>
                    <Typography variant="h4" className={classes.title}>
                    Never miss a new pet
                    </Typography>
                    <Grid item >
                    <input  id="newsletter" label="E-Mail" name="E-mail" placeholder='E-Mail Address' type='email' className={classes.textArea}></input><button className={classes.btn}>Submit</button>
                    </Grid>
                    
                    </List>
                </Grid>
            </Toolbar>   
        </AppBar>
        </Grid>  
      </div>
    );
}

export default Footer