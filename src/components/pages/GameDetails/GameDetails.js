import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGameDetails, getSelectedGame, removeSelectedGame } from '../../../state/reducers/gameSlice';
import LoadingComponent from '../../common/LoadingComponent';
import "./GameDetails.scss";


const GameDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(getSelectedGame);
  console.log(Object.keys(game).length);
  useEffect(() => {
    dispatch(fetchAsyncGameDetails(id));

    //cleanup
    return () => {
      dispatch(removeSelectedGame());
    };
  }, [dispatch, id]);

  return(
    <div className="game-details">
      <div className="game-details-container">
        <div className="game-details-img" style={{
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${game.background_image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
                                                  }}>
          <h1>{game.name}</h1>
          <div className="game-details-info-container">
            {Object.keys(game).length === 0 ? <LoadingComponent /> : (
              <>
                <div className="game-details-info-item">
                  <h2>About</h2>
                  <div>{game.description_raw}</div>
                </div>
                <div className="game-details-info-item">
                  <h3>Release Date</h3>
                  <p>{game.released}</p>
                </div>
                <div className="game-details-info-item">
                  <h3>Platforms</h3>
                  <p>{game.platforms ? game.platforms.map(platform => platform.platform.name).join(', ') : <LoadingComponent />}</p>
                </div>
                <div className="game-details-info-item">
                  <h3>Genres</h3>
                  <p>{game.genres ? game.genres.map(genre => genre.name).join(', ') : <LoadingComponent />}</p>
                </div>
                <div className="game-details-info-item">
                  <h3>Developers</h3>
                  <p>{game.developers ? game.developers.map(developer => developer.name).join(', ') : <LoadingComponent />}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) 
};

export default GameDetails;
