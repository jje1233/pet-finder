import React, {useContext} from 'react'
import PetCards from './PetCards'
import {Grid} from '@material-ui/core'
import {TokenContext} from './context'
import Pagination from 'react-js-pagination'
import SearchBar from './SearchBar'


function Content() {
    const petInfo = useContext(TokenContext)
        const handleChange = async (pageNumber) => {
        const animal = document.querySelector('#pet').value
        const zip = document.querySelector('#zip').value
        const miles = document.querySelector('#miles').value
        const data = await fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}&distance=${miles}&page=${pageNumber}`, {
        headers: {
            'Authorization': `Bearer ${petInfo.token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((data => data.json()))
        petInfo.setPets(data)
        
        console.log(data)
        petInfo.setPage(pageNumber)
        petInfo.setLoaded(true)
        window.scrollTo(0,200)
  }
 

    


    return (
        petInfo.loaded ?(
            <Grid container spacing={2}>
            
             {petInfo.pets.animals.map(pet =>{
                 return <Grid item xs={12} sm={3} key={pet.id}>
                            <PetCards 
                                name={pet.name}
                                breed={pet.breeds.primary}
                                gender={pet.gender}
                                size={pet.size}
                                desc={pet.description}
                                url={pet.url}
                                img={pet.photos[0]?.large}
                                
                                
                            />
                        </Grid> 
             })
 
             }
             <Grid item xs={12}>
                <Pagination 
                    activePage={petInfo.page}
                    
                    itemsCountPerPage={petInfo.totalResults / 20}
                    totalItemsCount={petInfo.totalResults}
                    pageRangeDisplayed={5}
                    onChange={handleChange}
                    
                    
                />
             </Grid>
            
            
            
        </Grid>
        ) : ('')
      
    )
}

export default Content