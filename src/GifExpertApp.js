import React ,{useState} from 'react';
import CategoryAdd from './component/CategoryAdd';
import GifGrid from './component/GifGrid';
import './index.css';

const GifExpertApp = () => {
    // const categories = ['Dreamcatcher', 'RedVelvet','G-idle'];
    const [team, setTeam] = useState(['IU']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setTeam = { setTeam } />
            <hr />

            {/* <button onClick={ handleAddTeam } > Agregar Team </button> */}

            <ol>
                {
                    team.map( team => {
                            return <GifGrid
                                    key={team} 
                                    categorie={ team } />;
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
