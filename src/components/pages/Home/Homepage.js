import React, {useEffect} from 'react';
import GamesListing from '../GamesListing/GamesListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncGames } from '../../../state/reducers/gameSlice';
const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncGames());
  },[dispatch]);
  
  return (
    <div className="homepage">
      <div className="banner-img"></div>
      <GamesListing />
    </div>
  )
};

export default Homepage;
