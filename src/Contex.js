import React, { Component, createContext } from 'react'
import items from './data'


const FurnitureContext = createContext();

export default class FurnitureProvider extends Component {

    state = {
        furnitures: [],
        sortedFurnitures: [],
        featuredFurnitures: [],
        loading: true
    }

    componentDidMount() {
        let furnitures = this.formatData(items)
        let featuredFurnitures = furnitures.filter(
            furniture => furniture.featured === true);

        this.setState({
            furnitures,
            sortedFurnitures: furnitures,
            featuredFurnitures,
            loading: false
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let furniture = { ...item.fields, images, id };
            return furniture;
        });
        return tempItems
    }

    render() {
        return (
            <FurnitureContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </FurnitureContext.Provider>
        )
    }
}

const FurnitureConsumer = FurnitureContext.Consumer;

export { FurnitureProvider, FurnitureConsumer, FurnitureContext };
