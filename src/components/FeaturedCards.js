import React, {useState, useContext, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button'


function FeaturedCards() {
    return(
    <div className='featured-cards-wrapper'>
        
        <div className='featured-cards-heading'>
            <p>We make it easy to go from search to adoption within days!</p>
        </div>
        <div className='featured-cards-container'>
            
            <div className='featured-card'>
                <img src='Images/search.jpg' alt='' className="featured-card-img"/>
                <p className='inner-card-heading'>Search</p>
                <p className='inner-card-body'>Search for anything from type of pet, breed, and distance desired. Currently supporting cats and dogs in the United States.</p>
            </div>
            
            <div className='featured-card'>
                <img src='Images/apply.jpg' alt='' className="featured-card-img"/>
                <p className='inner-card-heading'>Apply</p>
                <p className='inner-card-body'>The wellbeing of our rescue animals is our top priority. Home visits and an interview are a part of the process to esnure the right pet finds the right owner! </p>
            </div>
            
            <div className='featured-card'>
                <img src='Images/love.jpg' alt='' className="featured-card-img"/>
                <p className='inner-card-heading'>Adopt</p>
                <p className='inner-card-body'>Become a guardian for a pet in need and gain a new best friend!</p>
            </div>
        </div>
    </div>
    )
    
}

export default FeaturedCards