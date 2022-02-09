import React from 'react';

const GameCard = (props) => {
  const {data} = props;
  console.log(data)
  return(
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
        </div>
        <div className="card-bottom">
          <div className="card-title">
            <h3>{data.name}</h3>
            <p> MovieCard</p>
          </div>
        </div>
      </div>
    </div>

  ) ;
};

export default GameCard;
