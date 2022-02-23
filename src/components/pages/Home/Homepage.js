import React, { useState, useEffect} from 'react';
import GamesListing from '../GamesListing/GamesListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncGames } from '../../../state/reducers/gameSlice';
const Homepage = () => {
  const dispatch = useDispatch();
  const term = '';
  const [page , setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames({term, page}));
  },[dispatch, page]);
  
  return (
    <div className="homepage">
      <GamesListing />
      
      {/* <div className="pagination">
        <button onClick={() => { page > 1 ? setPage(page - 1) : setPage(1) }}>Prev</button>
        <button onClick={()=>{ setPage(page + 1)}}>Next</button>
      </div> */}

    </div>
  )
};

export default Homepage;
