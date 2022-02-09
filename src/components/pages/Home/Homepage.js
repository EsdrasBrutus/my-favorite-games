import React, {useEffect} from 'react';
import GamesListing from '../GamesListing/GamesListing';
import gameApi from "../../../api/gameApi";
import { key } from "../../../api/key";
import { useDispatch } from 'react-redux';
import { addGames } from '../../../state/reducers/gameReducer';
const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthGames = async () => {
      const response = await gameApi.get(`/games?key=${key}`)
      .catch(error => {console.log(error)});
      dispatch(addGames(response.data.results));
      //console.log(response.data.results);
    };
    fecthGames();
  },[]);
  
  return (
    <div className="homepage">
      <div className="banner-img"></div>
      <GamesListing />
    </div>
  )
};

export default Homepage;
