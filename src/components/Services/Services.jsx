import React, { Component } from 'react';
import { FaTruck, FaGlobe, FaPhone, FaDollarSign } from 'react-icons/fa';
import Title from './Title';
import './style.css';



export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaDollarSign />,
                title: "great prices",
                info: "Ease of payment through bank billet or any credit card"
            },
            {
                icon: <FaPhone />,
                title: "fast service",
                info: "We have a team ready and prepared to meet the customer's need"
            },
            {
                icon: <FaTruck />,
                title: "We deliver",
                info: "We deliver our product in any states with free shipping"
            },
            {
                icon: <FaGlobe />,
                title: "planned furniture",
                info: "We create your personalized furniture, according to the customer's choice"
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
