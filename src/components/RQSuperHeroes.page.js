import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchSuperHeros = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const [refetchInterval, setRefetchInterval] = useState(3000);

  const onSuccess = (data) => {
    console.log('success after data fetching', data);
  };

  const onError = (error) => {
    console.log('error after data error fetching', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    fetchSuperHeros,
    {
      onSuccess,
      onError,
      refetchInterval,
      select: (data) => {
        const superHeroesName = data?.data.map((hero) => hero.name);
        return superHeroesName;
      },
    }
  );

  console.log('isLoading', isLoading, 'isFetching', isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {/*{data?.data.map((hero) => (
        <div>{hero.name}</div>
      ))}*/}
      {data?.map((hero) => (
        <div>{hero}</div>
      ))}
    </>
  );
};
