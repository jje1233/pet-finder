import React from 'react'
import PetCards from './PetCards'
import {Grid} from '@material-ui/core'

function Content() {
    return (
       <Grid container spacing={2}>
           <Grid item xs={12} sm={4}>
                <PetCards />
           </Grid>
           
       </Grid>
    )
}

export default Content