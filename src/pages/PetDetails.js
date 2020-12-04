import React, {useContext} from 'react'
import {Grid} from '@material-ui/core'
import TokenContext from '../components/context'



function PetDetails(){
    const petInfo = useContext(TokenContext)
    return(
        <Grid container>
            <Grid item container xs={12}>
                <Grid item xs={12} sm={8}>
                    <img src={petInfo.image} alt={petInfo.name} />
                </Grid>
                <Grid item xs={12} small={4}>
                    <h1>Meet {petInfo.name}!</h1>
                    <h2>I'm a {petInfo.breed}. Read more about me below!</h2>
                </Grid>
            </Grid>
            

        </Grid>
    )
}

export default PetDetails