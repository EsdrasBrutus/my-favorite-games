import React from 'react';

function LoadingComponent(props) {
  const { message } = props;

  return <div>{message}</div>;
}

export default LoadingComponent;

// Here we are passing in a component we want to show whilst waiting for our API request
// to complete.
// LoadingComponent = {() => <div>Loading Games...</div>}