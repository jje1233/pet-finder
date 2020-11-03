import React from 'react'
import SearchBar from './SearchBar'

function Hero() {
        return (

                <div className='hero-div'>
                    <div className='hero-text'>
                        <h1 style={{fontSize:'60px'}}>Furever Friend Finder</h1>
                        <p style={{fontSize:'20px'}}>Let's find your new best friend.</p>
                    </div>
                    <div className='hero-search'>
                        <SearchBar />
                    </div>
                </div>
                   

        );
    
}

export default Hero