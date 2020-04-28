import React from 'react';
import HeroSection from '../components/Header/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import FurnitureContainer from '../components/FurnitureContainer/FurnitureContainer'


export const PlannedFurniture = () => {
    return (
        <>
            <HeroSection hero='furnitureHero'>
                <Banner title='uor planned wardrobes'>
                    <Link to='/' className='btn-primary'>
                        back to home
                    </Link>
                </Banner>
            </HeroSection>
            <FurnitureContainer />
        </>
    )
}

export default PlannedFurniture;