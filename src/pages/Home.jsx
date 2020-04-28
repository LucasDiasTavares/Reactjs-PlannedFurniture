import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Header/Hero';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import FeaturedItems from '../components/FeaturedFurniture/FeaturedItems';


export default function Home() {
    return (
        <Fragment>
            <HeroSection>
                <Banner
                    title='luxurious wardrobes'
                    subtitle='deluxe wardrobe starting at $ 180,00'>
                    <Link to='/furniture' className='btn-primary'>
                        our furnitures
                    </Link>
                </Banner>
            </HeroSection>
            <Services />
            <FeaturedItems />
        </Fragment>
    )
}
