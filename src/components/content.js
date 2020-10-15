import React, {useState, useEffect, useContext} from 'react'
import PetCards from './PetCards'
import {Grid} from '@material-ui/core'
import {TokenContext} from './context'
import { Photo, PhotoSharp } from '@material-ui/icons'

function Content() {
    const petInfo = useContext(TokenContext)


    return (
        petInfo.loaded ?(
            <Grid container spacing={2}>
            
             {petInfo.pets.map(pet =>{
                 return <Grid item xs={12} sm={4} key={pet.id}>
                            <PetCards 
                                name={pet.name}
                                desc={pet.description}
                                url={pet.url}
                                img={pet.photos[0]?.large}
                                
                                
                            />
                 </Grid>
             })
 
             }
            
            
        </Grid>
        ) : (<h1>yo</h1>)
      
    )
}

export default Content