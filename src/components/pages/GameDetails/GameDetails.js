import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGameDetails, getSelectedGame } from '../../../state/reducers/gameSlice';


const GameDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(getSelectedGame);
  console.log(game);
  useEffect(() => {
    dispatch(fetchAsyncGameDetails(id));
  }, [dispatch, id]);

  return(
    <div className="game-details">
      <div className="game-details-container">
        <div className="game-details-img">
          <img src={game.background_image} alt="game-img" />
        </div>
        <div className="game-details-info">
          <h2>{game.name}</h2>
          <div className="game-details-info-container">
            <div className="game-details-info-item">
              <div>{game.description_raw}</div>;
            </div>
            <div className="game-details-info-item">
              <h3>Release Date</h3>
              <p>{game.released}</p>
            </div>
            <div className="game-details-info-item">
              <h3>Platforms</h3>
              <p>{game.platforms.map(platform => platform.platform.name).join(', ')}</p>
            </div>
            <div className="game-details-info-item">
              <h3>Genres</h3>
              <p>{game.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
};

export default GameDetails;
