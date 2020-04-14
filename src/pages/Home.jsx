import React from 'react';
import HeroSection from '../components/Header/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <HeroSection>
                <Banner
                    title='luxurious furniture'
                    subtitle='deluxe wardrobe starting at $ 199,00'>
                    <Link to='/furniture' className='btn-primary'>
                        our furnitures
                    </Link>
                </Banner>
            </HeroSection>
        </div>
    )
}
