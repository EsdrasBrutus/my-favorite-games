import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllGames } from '../../../state/reducers/gameSlice';
import GameCard from "../GamesCard/GameCard";
import "./GamesListing.scss";
import LoadingComponent from "../../common/LoadingComponent";


const GamesListing = () => {
    const games = useSelector(getAllGames);
    let renderGames = "";
    console.log(games);
    
    renderGames = games.results ? renderGames = games.results.map((game, index) => (
        <GameCard key={index} game={game} />
    )) : <LoadingComponent />;
    
    return (
        <div className="games-wrapper">
            <div className="games-list">
                <h2>Games</h2>
                <div className='games-container'>
                    {renderGames}
                </div>
            </div>
        </div>


    )
    

};

export default GamesListing;
