import React from 'react';
import ReactDOM from 'react-dom';
import {movies, currentMovie} from './mocks/films';
import App from './components/app/app';

ReactDOM.render(
    <App
      currentMovie={currentMovie}
      movies={movies}
    />, document.querySelector(`#root`));
