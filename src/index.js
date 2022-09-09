import axios from 'axios';
import { genreList } from './js/retrieveGenreList';
// retrieveGenreList();
// console.log(genreList);
import { createMovieCard } from './js/templates';

async function test() {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=7bdc810ad124afd40c6daedecd43d00a'
  );
  console.log(createMovieCard(data.results));
}

test();
