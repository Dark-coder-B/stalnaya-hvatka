import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../assets/fon1.jpg';
import image1 from '../assets/fon2.jpg';
import { CarouselCaption } from 'react-bootstrap';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={image}
                        alt='Steel grip'
                    />
                    <CarouselCaption>
                        <h3>Стальная хватка</h3>
                        <p>Мы находимся в городе Улан-Удэ</p>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={image1}
                        alt='Steel grip'
                    />
                    <CarouselCaption>
                        <h3>Стальная хватка</h3>
                        <p>Принимаем заказы по республике Бурятия</p>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={image}
                        alt='Steel grip'
                    />
                    <CarouselCaption>
                        <h3>Стальная хватка</h3>
                        <p>Улан-Удэ 2026г.</p>
                    </CarouselCaption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
