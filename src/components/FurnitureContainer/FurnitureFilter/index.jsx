import React from 'react'
import { useContext } from 'react'
import { FurnitureContext } from '../../../Contex'
import Title from '../../Services/Title'
import './style.css'


const uniqueValues = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function FurnitureFilter({ furnitures }) {
    const context = useContext(FurnitureContext)

    const {
        handleChange,
        type,
        drawer,
        price,
        minPrice,
        maxPrice,
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        mirror } = context

    let types = uniqueValues(furnitures, 'type');
    types = ['all', ...types];
    let drawers = uniqueValues(furnitures, 'drawer');

    return (
        <section className="filter-container">
            <Title title="Search Furniture" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Furniture Type</label>
                    <select name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types = types.map((item, index) => {
                            return <option value={item} key={index}>{item}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="drawer">Drawers</label>
                    <select name="drawer"
                        id="drawer"
                        value={drawer}
                        className="form-control"
                        onChange={handleChange}>
                        {drawers = drawers.map((item, index) => {
                            return <option value={item} key={index}>{item}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price ${price}</label>
                    <input name="price"
                        id="price"
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="minHeigth">Heigth in cm</label>
                    <div className="size-inputs">
                        <input type="number"
                            name="minHeight"
                            value={minHeight}
                            onChange={handleChange}
                            className="size-input" />
                        <input type="number"
                            name="maxHeight"
                            value={maxHeight}
                            onChange={handleChange}
                            className="size-input" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="minWidth">Width in cm</label>
                    <div className="size-inputs">
                        <input type="number"
                            name="minWidth"
                            value={minWidth}
                            onChange={handleChange}
                            className="size-input" />
                        <input type="number"
                            name="maxWidth"
                            value={maxWidth}
                            onChange={handleChange}
                            className="size-input" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                            name="mirror"
                            id="mirror"
                            checked={mirror}
                            onChange={handleChange} />
                        <label htmlFor="mirror">Mirror</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
