import React, { Component } from 'react'
import defaultBcg from '../images/defaultBcg.jpg'
import Hero from '../components/Header/Hero'
import Banner from '../components/Banner/Banner'
import { Link } from 'react-router-dom'
import { FurnitureContext } from '../Contex'
import StyledHero from '../components/Header/StyledHero'



export default class SingleFurniture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = FurnitureContext;

    render() {
        const { getFurniture } = this.context;
        const furniture = getFurniture(this.state.slug);
        if (!furniture) {
            return <div className="error">
                <h3>No such furtniture could be found</h3>
                <Link to='/' className='btn-primary'>Back to home</Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, images, mirror } = furniture

        return (
            <StyledHero img={images[0]}>
                <Banner title={`${name} furniture`}>
                    <Link className='btn-primary' to='/'>back to furnitures</Link>
                </Banner>
            </StyledHero>
        )
    }
}
