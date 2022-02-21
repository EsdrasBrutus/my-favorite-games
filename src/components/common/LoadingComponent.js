import React from 'react';

function LoadingComponent() {
 

  return <div>Loading...</div>;
}

export default LoadingComponent;

// Here we are passing in a component we want to show whilst waiting for our API request
// to complete.
// LoadingComponent = {() => <div>Loading Games...</div>}