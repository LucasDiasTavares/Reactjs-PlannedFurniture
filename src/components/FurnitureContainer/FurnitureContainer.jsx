import React from 'react'
import FurnitureFilter from './FurnitureFilter/index'
import FurtinitureList from './FurnitureList/index'
import { withFurnitureConsume } from '../../Contex';
import Loading from '../Loading'

function FurnitureContainer({ context }) {
    const { loading, sortedFurnitures, furnitures } = context

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <FurnitureFilter furnitures={furnitures} />
            <FurtinitureList furnitures={sortedFurnitures} />
        </>
    )
}

export default withFurnitureConsume(FurnitureContainer)
