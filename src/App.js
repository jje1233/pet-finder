import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
// import Content from './components/content'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import SearchResults from './pages/SearchResults'
import FilteredResults from './pages/FilteredResults'
import Content from './components/content'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import {TokenContext} from './components/context'
import PetDetails from './pages/PetDetails'


function App() {

  const [token, setToken] = useState(null)
  const [update, setUpdate] = useState(0)
  const [pets, setPets] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [breeds, setBreeds] = useState(null)
  const [url, setUrl] = useState(``)
  const [animal, setAnimal] = useState('')
  const [zip, setZip] = useState('')
  const [miles, setMiles] = useState('')
  const [selectedBreed, setSelectedBreed] = useState(null)
  const [filteredBreed, setFilteredBreed] = useState(null)
  const [filteredPage, setFilteredPage] = useState(1)
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [gender, setGender] = useState('')
  const [breed, setBreed] = useState('')
  const [status, setStatus] = useState('')
  const [attributes, setAttributes] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [petUrl, setPetUrl] = useState('')
  const [size, setSize] = useState('')
  const [trained, setTrained] = useState('')

  

      
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
        <TokenContext.Provider value={{token, 
          pets, setPets, 
          loaded, setLoaded, 
          page, setPage, 
          totalResults, setTotalResults, 
          breeds, setBreeds, 
          filteredBreed, setFilteredBreed, 
          url, setUrl, 
          miles, setMiles, 
          zip, setZip, 
          animal, setAnimal, 
          selectedBreed, setSelectedBreed, 
          filteredPage, setFilteredPage,
          name, setName,
          image, setImage,
          gender, setGender,
          desc, setDesc, 
          breed, setBreed, 
          status, setStatus,
          attributes, setAttributes,
          location, setLocation,
          petUrl, setPetUrl,
          size, setSize,
          trained, setTrained}}>
            <Header />
             <Switch>
              <Route path='/' exact component={Hero}/>
              <Route path='/searchresults'  component={SearchResults} />
              <Route path='/filteredresults' component={FilteredResults} />
              <Route path='/petdetails' component={PetDetails} />
             </Switch>
            <Footer />
        </TokenContext.Provider>
      </div>
    
    
    
  );
}

export default App;
