import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncGames } from '../../../state/reducers/gameSlice';
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncGames(term));
    setTerm('');
  };

  return(
    <div className="header">
      <div className="header_logo">
        <img src="https://www.freepnglogos.com/uploads/games-png/games-controller-game-controller-video-game-icon-18.png" alt="logo"/>
        <p>Games</p>
      </div>
      <div className='searchbar'>
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search for games..." onChange={(e)=> setTerm(e.target.value) }/>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
