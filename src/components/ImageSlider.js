import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageSlider(props) {

    
        return (
            <Carousel  infiniteLoop showStatus={false} autoPlay showArrows={true}  showThumbs={false} >
                <div>
                    <img src="Images/petImg2.jpg"  alt='hero 1'/>

                </div>
                <div>
                    <img src="Images/petImg1.jpg"  alt='hero 2' />

                </div>
                <div>
                    <img src="Images/petImg3.jpg"  alt='hero 3'/>

                </div>
                <div>
                    <img src="Images/petImg4.jpg"  alt='hero 4'/>

                </div>
            </Carousel>
        );
    
}

export default ImageSlider