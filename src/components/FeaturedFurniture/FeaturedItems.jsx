import React, { Component } from 'react';
import { FurnitureContext } from '../../Contex';


export default class FeaturedItems extends Component {
    static contextType = FurnitureContext
    render() {
        return (
            <div>
                Hello from FeaturedItems
            </div>
        )
    }
}
