import axios from 'axios';

export const BASE_URL = 'https://api-cotw-buddy.herokuapp.com/api/';
export const ANIMALS_URL = 'animals';
export const POPULATE = '?populate=*';

export const getData = (url) => {
  axios.get(url).then((response) => console.log(response.data.data));
};

export const getAnimals = getData(BASE_URL + ANIMALS_URL + POPULATE);
