import React from 'react';
import {Grid} from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           Content
           ContentContent
           Content
           Content
           Content
           Content
           Content

           Content
           Content
           Content
           Content
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
        <Grid item xs={12}>
            <Footer />
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
