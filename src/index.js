import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Routes,
} from 'react-router-dom';

import Homepage from './components/pages/Home/Homepage';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
      
      </Routes>
    </div>
  );
};

