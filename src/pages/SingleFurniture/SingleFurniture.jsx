import React, { Component } from 'react'
import defaultBcg from '../../images/defaultBcg.jpg'
import Banner from '../../components/Banner/Banner'
import Title from '../../components/Services/Title'
import { Link } from 'react-router-dom'
import { FurnitureContext } from '../../Contex'
import StyledHero from '../../components/Header/StyledHero'
import './style.css'



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

        const { name, description, heigth, width, price, extras, images, mirror } = furniture

        const [mainImg, ...otherImgs] = images;
        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner title={name}>
                        <Link className='btn-primary' to='/furniture'>back to wardrobes</Link>
                    </Banner>
                </StyledHero>

                <section className='single-furniture'>
                    <Title title="Outras imagens" />
                    <div className="single-furniture-images">
                        {otherImgs.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-furniture-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>Height: {heigth} </h6>
                            <h6>Width: {width} </h6>
                            <h6>
                                {mirror ? "contains mirror" : "not contains mirror"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="furniture-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index} > - {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
