import React, {useEffect, useState, useContext} from 'react'
import {Grid} from '@material-ui/core'
import FilterBar from '../components/FilterBar'
import TokenContext from '../components/context'
import PetCards from '../components/PetCards'
import Pagination from 'react-js-pagination'



function SearchResults(props) {
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
  }
    return(
        <Grid container spacing={2}>
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={3}>
                    <FilterBar /> 
                </Grid>
                <Grid item container xs={12} sm={8}>  
                {petInfo.loaded ? (
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
                        ) : (<h1>We are all the cards</h1>)}
                </Grid>


        </Grid>
    )
}

export default SearchResults