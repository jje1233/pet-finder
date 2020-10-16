import React, {useEffect, useState} from 'react'
import {Grid} from '@material-ui/core'


function SearchResults(props) {
    return(
        <Grid container>
            <Grid item containerspacing={2}>
                <Grid item xs={false} sm={1} />
                <Grid item container xs={3}>
                    I am the fildet container 
                </Grid>
                <Grid item xs={8}>
                    we are all the cardsS
                </Grid>

            </Grid>
        </Grid>
    )
}

export default SearchResults