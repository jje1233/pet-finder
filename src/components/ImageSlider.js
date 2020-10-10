import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageSlider(props) {

    
        return (
            <Carousel  showStatus={false} autoPlay showArrows={true}  showThumbs={false} style={{height: '80vh', width: '100%'}}>
                <div>
                    <img src="Images/petImg2.jpg" />

                </div>
                <div>
                    <img src="Images/petImg1.jpg" />

                </div>
                <div>
                    <img src="Images/petImg3.jpg" />

                </div>
                <div>
                    <img src="Images/petImg4.jpg" />

                </div>
            </Carousel>
        );
    
}

export default ImageSlider