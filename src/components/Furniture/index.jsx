import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import defaultImg from '../../images/item-2.jpeg'
import PropTypes from 'prop-types'


export default function index({ furniture }) {
    const { name, slug, images, price } = furniture;
    console.log(furniture);


    return (
        <article className='furniture'>
            <div className="img-container">
                <img src={images[0] || defaultImg} alt={name} />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>in cash</p>
                </div>
                <Link
                    className='btn-primary furniture-link'
                    to={`/furniture/${slug}`}>
                    Featured
                    </Link>
            </div>
            <p className='furniture-info'>{name}</p>
        </article>
    )
}

index.propTypes = {
    furniture: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
