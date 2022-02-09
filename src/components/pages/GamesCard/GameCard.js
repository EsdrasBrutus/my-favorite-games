import React from 'react';
import "./GameCard.scss"

const GameCard = (props) => {
  const {game} = props;
  return(
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

  ) ;
};

export default GameCard;
