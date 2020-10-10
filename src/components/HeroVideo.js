import React from 'react'
import {Grid} from '@material-ui/core'
import ReactPlayer from 'react-player'



function HeroVideo(){
    return(
       <ReactPlayer url='public\heroVid.mp4' height='80vh' autoPlay loop muted />
    )
}

export default HeroVideo