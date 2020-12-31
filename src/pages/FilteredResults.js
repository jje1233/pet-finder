import React, {useContext} from 'react'
import {Grid} from '@material-ui/core'
import FilterBar from '../components/FilterBar'
import TokenContext from '../components/context'
import PetCards from '../components/PetCards'
import Pagination from 'react-js-pagination'
import SearchBar from '../components/SearchBar'



function FilteredResults(props) {
    const petInfo = useContext(TokenContext)
    const handleChange = async (pageNumber) => {
        
        const data = await fetch(`https://api.petfinder.com/v2/animals?type=${petInfo.animal}&location=${petInfo.zip}&distance=${petInfo.miles}&breed=${petInfo.selectedBreed}&page=${pageNumber}`, {
        headers: {
            'Authorization': `Bearer ${petInfo.token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((data => data.json()))
        petInfo.setPets(data)
        
        console.log(data)
        petInfo.setFilteredPage(pageNumber)
        petInfo.setLoaded(true)
        window.scroll(0,0)
  }
  
    return(
        <Grid container spacing={2} style={{marginTop: '60px'}}>
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={2}>
                    <FilterBar /> 
                </Grid>
                <Grid item container xs={12} sm={8}>  
                <Grid item xs={false} sm={1}/>
                {petInfo.loaded && petInfo.filteredBreed? (
                    <Grid container spacing={2}>
                    
                        {petInfo.filteredBreed.animals.map(pet =>{
                            return <Grid item xs={12} sm={3} key={pet.id}>
                                        <PetCards 
                                            name={pet.name}
                                            breed={pet.breeds.primary}
                                            gender={pet.gender}
                                            size={pet.size}
                                            desc={pet.description}
                                            url={pet.url}
                                            img={pet.photos[0]?.large}
                                            detailImg={pet.photos[0]?.full}
                                            attributes={pet.attributes}
                                            status={pet.status}
                                            
                                        />
                                    </Grid> 
                        })
            
                        }
                      <Grid item xs={12}>
                            <Pagination 
                                activePage={petInfo.filteredPage}
                                
                                itemsCountPerPage={petInfo.totalResults / 20}
                                totalItemsCount={petInfo.totalResults}
                                pageRangeDisplayed={5}
                                onChange={handleChange}
                            />
                        </Grid>
  
                    </Grid>
                        ) : (<div className="loader">Loading...</div>)}
                    
                </Grid>


        </Grid>
    )
}

export default FilteredResults
