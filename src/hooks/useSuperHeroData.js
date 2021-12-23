import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get('http://localhost:4000/superheroes/' + heroId);
};

export const useSuperHeroData = (
  heroId,
  onSuccess,
  onError,
  enabled = true
) => {
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    onSuccess,
    onError,
    enabled,
  });
};
