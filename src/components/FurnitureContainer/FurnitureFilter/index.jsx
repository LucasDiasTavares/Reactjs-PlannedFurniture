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
        capacity,
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
            </form>
        </section>
    )
}
