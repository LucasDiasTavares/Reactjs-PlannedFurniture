import React, { Component } from 'react';
import { FurnitureContext } from '../../Contex';
import Furniture from '../Furniture';
import Loading from '../Loading';
import Title from '../Services/Title';
import './style.css';


export default class FeaturedItems extends Component {
    static contextType = FurnitureContext

    render() {
        let { loading, featuredFurnitures } = this.context;

        featuredFurnitures = featuredFurnitures.map(furniture => {
            return <Furniture key={furniture.id} furniture={furniture} />
        })

        return (
            <section className='featured-furniture'>
                <Title title='Featured Furnitures' />
                <div className="featured-furniture-center">
                    {loading ? <Loading /> : featuredFurnitures}
                </div>
            </section>
        )
    }
}
