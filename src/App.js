import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
// import Content from './components/content'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import SearchResults from './pages/SearchResults'
import Content from './components/content'
import './App.css';
import {TokenContext} from './components/context'

function App() {

  const [token, setToken] = useState(null)
  const [update, setUpdate] = useState(0)
  const [pets, setPets] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const [breeds, setBreeds] = useState(null)
  const [filteredBreeds, setFilteredBreeds] = useState(null)

  

  

      
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials")
    params.append("client_id", process.env.REACT_APP_PET_FINDER_KEY)
    params.append("client_secret", process.env.REACT_APP_PET_FINDER_SECRET)

    
    const fetchToken = async () => {
      const apiCall = await fetch('https://api.petfinder.com/v2/oauth2/token',{
      method: "POST",    
      body: params,
      })

      const token = await apiCall.json()
      
      setToken(token.access_token)
      console.log(token)
    }

    useEffect(()=>{
      fetchToken()
    },[update])

    
      
    

  return (
      
      <div className="App">
        <TokenContext.Provider value={{token, pets, setPets, loaded, setLoaded, page, setPage, totalResults, setTotalResults, breeds, setBreeds, filteredBreeds, setFilteredBreeds}}>
          
             <Grid container direction='column'>
             <Grid item >
               <Header />
             </Grid>

             <Grid item container>
               <Grid item xs={12} >
                 <Hero />
               </Grid>
             </Grid>

             <Grid item>
                 <Footer />
             </Grid>
           </Grid>
          
        </TokenContext.Provider>
      
      
    </div>
    
    
  );
}

export default App;
