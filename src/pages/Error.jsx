import React from 'react';
import HeroSection from '../components/Header/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';


export default function Error() {
    return (
        <HeroSection>
            <Banner
                title='404'
                subtitle='page not found'>
                <Link to='/' className='btn-primary'>
                    back to home
                    </Link>
            </Banner>
        </HeroSection>
    )
}
