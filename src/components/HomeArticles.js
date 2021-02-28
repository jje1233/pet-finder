import React from 'react'

function HomeArticles(){
    return(
        <div className='home-articles-container'>
            <p className='home-articles-header'>Helpful Articles to Get Started Quickly</p>
            <div className='home-articles-wrapper'>
                <div className='home-article-card'>
                    <img src='Images/pet-dog.jpg'  class='home-article-img' alt='dog'/>
                    <div className='home-article-card-body'>
                        <p>10 Things to Check Before Your Home is Dog Ready</p>
                       
                    </div>
                    <div className='home-article-card-cta'>Read More</div>
                </div>
                <div className='home-article-card'>
                    <img src='Images/pet-cat.jpg'  class='home-article-img'  alt='cat'/>
                    <div className='home-article-card-body'>
                        <p>10 Things to Check Before Your Home is Cat Ready</p>
                        
                    </div>
                    <div className='home-article-card-cta'>Read More</div>
                </div>
                <div className='home-article-card'>
                    <img src='Images/pet-nutrition.jpg'  class='home-article-img'  alt='dogs looking at bones'/>
                    <div className='home-article-card-body'>
                        <p>How to Measure Nutritional Requirements For Your Pet</p>
                        
                    </div>
                    <div className='home-article-card-cta'>Read More</div>
                </div>
                <div className='home-article-card'>
                    <img src='Images/pet-bed.jpg'  class='home-article-img'  alt='cat laying on bed'/>
                    <div className='home-article-card-body'>
                        <p>Why Proper Bedding is Essential to Your Pet's Health</p>
                    </div>
                    <div className='home-article-card-cta'>Read More</div>
                </div>
                <div className='home-article-card'>
                    <img src='Images/pet-adopt.jpg'  class='home-article-img'  alt='adopt'/>
                    <div className='home-article-card-body hcab-last'>
                        <p>How Adopting a Pet Can Benefit More than Just Your Home</p>
                    </div>
                    <div className='home-article-card-cta'>Read More</div>
                </div>
            </div> 
        </div>
    )
    
}

export default HomeArticles