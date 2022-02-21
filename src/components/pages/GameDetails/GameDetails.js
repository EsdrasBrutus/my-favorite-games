import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGameDetails, getSelectedGame } from '../../../state/reducers/gameSlice';
import LoadingComponent from '../../common/LoadingComponent';
import "./GameDetails.scss";


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
        <div className="game-details-img" style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${game.background_image})`,
                                                  backgroundPosition: 'center',
                                                  backgroundSize: 'cover',
                                                  }}>
          {/* <img src={game.background_image} alt="game-img" /> */}
          <h1>{game.name}</h1>
          <div className="game-details-info-container">
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
          </div>
        </div>
        {/* <div className="game-details-info">
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
              <div>{game.platforms ? game.platforms.map(platform => platform.platform.name).join(', ') : <LoadingComponent />}</div>
            </div>
            <div className="game-details-info-item">
              <h3>Genres</h3>
              <div>{game.genres ? game.genres.map(genre => genre.name).join(', ') : <LoadingComponent />}</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  ) 
};

export default GameDetails;
