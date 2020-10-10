import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ImageSlider(props) {

    var items = [
        {
            img: 'Images/petImg2.jpg'
        },
        {
            img: 'Images/petImg1.jpg'
        },
        {
            img: 'Images/petImg3.jpg'
        },
        {
            img: 'Images/petImg4.jpg'
        },
    ]
    return(
        <Carousel  navButtonsAlwaysVisible animation='slide' interval='3000'>
            {
                items.map((item, index) => <ImgItem key={index} item={item} />)
            }
        </Carousel>
    )
}

function ImgItem(props) {
    return(
        <img src={props.item.img} style={{maxHeight: '100%', width: '100%', objectFit: 'cover'}} />
    )
}

export default ImageSlider