import React, {useState} from 'react';
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
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
      <div className="favorites">
        <div className="favorites_icon">
          <img src= "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png" alt="heart"/>
        </div>
        <div className="favorites_count">
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
