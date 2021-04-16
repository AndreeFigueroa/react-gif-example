import React ,{useEffect, useState}from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGif } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ categorie }) => {
   const { data:images, loading } = useFetchGif(categorie);

    return (
        <>
            <h3> {categorie} </h3>
            {loading && <p>Loading</p> }
            <div className="card-grid" > 
                {
                    images.map( img => {
                        return  (
                            <GifGridItem 
                                key={img.id}
                                { ...img } 
                            />
                        )
                    })
                }
            
            </div>
        </>
    )
}

export default GifGrid;
