import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllGames } from '../../../state/reducers/gameReducer';
import GameCard from "../GamesCard/GameCard";


const GamesListing = () => {
    const games = useSelector(getAllGames);
    //let renderGames = "";
    console.log(Array.isArray(games));
    console.log(games);
    
    return (
        <div className="games-wrapper">
            <div className="games-list">
                <h2>Games</h2>
                <div className='games-container'>
                    {games.map((game, index) => {
                        <GameCard key={index} game={game} />
                    })}
                </div>
            </div>
        </div>


    )
    

};

export default GamesListing;
