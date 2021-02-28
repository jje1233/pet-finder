import React from 'react'
import SearchBar from './SearchBar'
import FeaturedCards from './FeaturedCards'
import HomeShelterSearch from './HomeShelterSearch'
import HomeArticles from './HomeArticles'


function Hero() {
        return (
                <>
                <div className='hero-div'>
                    <div className='hero-text'>
                        <h1 style={{fontSize:'60px'}}>Furever Friend Finder</h1>
                        <p style={{fontSize:'20px'}}>Let's find your new best friend.</p>
                    </div>
                    <div className='hero-search'>
                        <SearchBar />
                    </div>
                    
                </div>
                <div className='featured-hero'>
                    <FeaturedCards />    
                </div>
                <div className='home-articles'>
                    <HomeArticles />
                </div>
                <div className='home-shelter-hero'>
                    <HomeShelterSearch />
                </div>

                </>
                   

        );
    
}

export default Hero