import React from 'react';
import "./GameCard.scss"
import { Link } from "react-router-dom";

const GameCard = (props) => {
  const {game} = props;
  return(
    <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }} >
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={game.background_image} alt="game-img" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h3>{game.name}</h3>
          </div>
        </div>
      </div>
    </div>
  </Link>

  ) ;
};

export default GameCard;
