import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError, enabled = true) => {
  return useQuery('super-heroes', fetchSuperHeros, {
    onSuccess,
    onError,
    /*select: (data) => {
      const superHeroesName = data?.data.map((hero) => hero.name);
      return superHeroesName;
    },*/
    enabled,
  });
};
