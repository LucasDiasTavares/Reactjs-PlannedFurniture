import React, { Component, createContext } from 'react'
import items from './data'


const FurnitureContext = createContext();

export default class FurnitureProvider extends Component {

    state = {
        furnitures: [],
        sortedFurnitures: [],
        featuredFurnitures: [],
        loading: true,
        //filters
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minHeight: 0,
        maxHeight: 0,
        minWidth: 0,
        maxWidth: 0,
        mirror: false,
    }

    componentDidMount() {
        let furnitures = this.formatData(items)
        let featuredFurnitures = furnitures.filter(
            furniture => furniture.featured === true);

        let maxPrice = Math.max(...furnitures.map(item => item.price));
        let maxHeight = Math.max(...furnitures.map(item => item.heigth));
        let maxWidth = Math.max(...furnitures.map(item => item.width));

        this.setState({
            furnitures,
            sortedFurnitures: furnitures,
            featuredFurnitures,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxHeight,
            maxWidth
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

    getFurniture = (slug) => {
        let tempFurnitures = [...this.state.furnitures];
        const furniture = tempFurnitures.find(furniture => furniture.slug === slug)
        return furniture
    }

    handleChange = event => {
        const target = event.target
        const value = event.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterFurnitures)
    }

    filterFurnitures = () => {
        let {
            furnitures,
            type,
            capacity,
            price,
            minHeight,
            maxHeight,
            minWidth,
            maxWidth,
            mirror
        } = this.state

        let tempFurnitures = [...furnitures];
        if (type !== 'all') {
            tempFurnitures = tempFurnitures.filter(furniture => furniture.type === type)
        }
        this.setState({
            sortedFurnitures: tempFurnitures
        })
    }

    render() {
        return (
            <FurnitureContext.Provider value={{
                ...this.state,
                getFurniture: this.getFurniture,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </FurnitureContext.Provider>
        )
    }
}

const FurnitureConsumer = FurnitureContext.Consumer;

export function withFurnitureConsume(Component) {
    return function ConsumerWrapper(props) {
        return <FurnitureConsumer>
            {value => <Component {...props} context={value} />}
        </FurnitureConsumer>
    }
}

export { FurnitureProvider, FurnitureConsumer, FurnitureContext };
