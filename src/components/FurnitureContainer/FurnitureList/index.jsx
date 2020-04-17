import React from 'react'
import Furniture from '../../FurnitureCard/index'
import './style.css'

export default function FurnitureList({ furnitures }) {

    if (furnitures.length === 0) {
        return (
            <div className="empty-search">
                <h3>No furniture matched your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="furnitureslist">
            <div className="furnitureslist-center">
                {
                    furnitures.map(item => {
                        return <Furniture key={item.id} furniture={item} />
                    })
                }
            </div>
        </section>
    )
}
