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
        drawer: 1,
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
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterFurnitures)
    }

    filterFurnitures = () => {
        let {
            furnitures,
            type,
            drawer,
            price,
            minHeight,
            maxHeight,
            minWidth,
            maxWidth,
            mirror
        } = this.state

        let tempFurnitures = [...furnitures];
        drawer = parseInt(drawer)
        if (type !== 'all') {
            tempFurnitures = tempFurnitures.filter(furniture => furniture.type === type)
        }
        //filter by mirror
        if (mirror) {
            tempFurnitures = tempFurnitures.filter(furniture => furniture.mirror === true);
        }
        //filter by drawer
        if (drawer !== 0) {
            tempFurnitures = tempFurnitures.filter(furniture => furniture.drawer >= drawer)
        }
        //filter by price
        price = parseInt(price)
        tempFurnitures = tempFurnitures.filter(furniture => furniture.price <= price);
        //filter by heigth
        tempFurnitures = tempFurnitures.filter(furniture =>
            furniture.heigth >= minHeight && furniture.heigth <= maxHeight);
        //filter by width
        tempFurnitures = tempFurnitures.filter(furniture =>
            furniture.width >= minWidth && furniture.width <= maxWidth);

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
