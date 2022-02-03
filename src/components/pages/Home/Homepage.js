import React, {useEffect} from 'react';
import GamesListing from '../GamesListing/GamesListing';
import gameApi from "../../../api/gameApi";
import { key } from "../../../api/key";
const Homepage = () => {
 
  useEffect(() => {
    const fecthGames = async () => {
      const response = await gameApi.get(`/games?key=${key}`)
      .catch(error => {console.log(error)});
      console.log(response);
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
