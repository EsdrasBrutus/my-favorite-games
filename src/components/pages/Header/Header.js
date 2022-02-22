import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncGames } from '../../../state/reducers/gameSlice';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncGames(term));
    setTerm('');
    navigate('/');
  };

  return(
    <div className="header">
      <div className="header_logo">
        <img src="https://www.freepnglogos.com/uploads/games-png/games-controller-game-controller-video-game-icon-18.png" alt="logo"/>
        <Link className='title' to={'/'}>Games </Link>
      </div>
      
      <div className='searchbar'>
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search for games..." onChange={(e)=> setTerm(e.target.value) }/>
          <button type="submit">S</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
