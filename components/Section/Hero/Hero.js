'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Container } from '@mui/material';
import styles from './Hero.module.scss';

const Hero = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Container maxWidth="md">
                <div className={styles.wrap}>
                    <Slider {...settings}>
                        <div className={styles.img}>
                            <img src='https://cdn.xtmobile.vn/vnt_upload/news/08_2019/19/iphone-12-pro-xtmobile_-banner.jpg' />
                        </div>

                        <div className={styles.img}>
                            <img src='https://cdn.xtmobile.vn/vnt_upload/news/08_2019/19/iphone-12-pro-xtmobile_-banner.jpg' />
                        </div>
                    </Slider>

                </div>

            </Container>
        </>
    )
}

export default Hero;