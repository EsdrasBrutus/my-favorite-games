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
import "./index.scss";

import Homepage from './components/pages/Home/Homepage';
import GameDetails from './components/pages/GameDetails/GameDetails';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';
import Header from './components/pages/Header/Header';
import Footer from './components/pages/Footer/Footer';


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
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

