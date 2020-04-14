import React from 'react';
import HeroSection from '../components/Header/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';


export const PlannedFurniture = () => {
    return (
        <HeroSection hero='furnitureHero'>
            <Banner title='uor planned furniture'>
                <Link to='/' className='btn-primary'>
                    back to home
                    </Link>
            </Banner>
        </HeroSection>
    )
}

export default PlannedFurniture;