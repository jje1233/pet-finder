import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));
const drawerItems = [
  {
    id: 1,
    icon: <HomeIcon href="#"/>,
    name: 'Home'
  },
  {
    id: 2,
    icon: <PetsIcon />,
    name: 'Pets (Coming Soon)'
  },

]
function Header() {

  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(true) 
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: '#17252A', color: '#3AAFA9', top: 0}}>
        
        <Toolbar>
          <IconButton onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link href='/' color="inherit">
          <Typography className={classes.title} variant="h4" noWrap >
            Furever Friend Finder
          </Typography>
          </Link>
          
          
        </Toolbar>
      </AppBar>

      <SwipeableDrawer 
      anchor='left'
      open={open}
      onClose={() => setOpen(false)}
      >
      <List className={classes.list}>
        {drawerItems.map((item, index) => (
          <Link href="/">
          <ListItem button key={index} a>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
          
        ))}
      </List>
      <Divider />
      </SwipeableDrawer>
      
    </div>
  );
}


export default Header