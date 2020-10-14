import React, {useState, useEffect, useContext} from 'react'
import PetCards from './PetCards'
import {Grid} from '@material-ui/core'
import {TokenContext} from './context'

function Content() {
    const petInfo = useContext(TokenContext)


    return (
        petInfo.loaded ?(
            <Grid container spacing={2}>
            
             {petInfo.pets.animals.map(pet =>{
                 return <Grid item xs={12} sm={4}>
                            <PetCards 
                                key={pet.id}
                                name={pet.name}
                                img={pet.photos[0].large}
                                desc={pet.description}
                                url={pet.url}
                            />
                 </Grid>
             })
 
             }
            
            
        </Grid>
        ) : (<h1>yo</h1>)
      
    )
}

export default Content