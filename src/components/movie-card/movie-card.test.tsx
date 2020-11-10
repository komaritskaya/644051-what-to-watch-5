import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`Should Movie Card component render correctly`, () => {
  const movie = {
    id: `123`,
    title: `Some Film`,
    poster: `some-poster.jpg`,
    genre: `comedy`,
    year: 2000,
    director: `Some Director`,
    cast: [`Actor One`, `Actor Two`],
    cover: `some-bg-poster.jpg`,
    description: `Damn good film`,
    rating: 10.0,
    reviewsCount: 100,
  };

  const tree = renderer
    .create(<MovieCard
      movie={movie}
      onCardClick={() => {}}
      onCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
