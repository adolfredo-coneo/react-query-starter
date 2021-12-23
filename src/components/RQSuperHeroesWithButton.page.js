import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export const RQSuperHeroesPageWithButton = () => {
  const onSuccess = (data) => {
    console.log('success after data fetching', data);
  };

  const onError = (error) => {
    console.log('error after data error fetching', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError, false);

  console.log('isLoading', isLoading, 'isFetching', isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page with Fetch Button</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.map((hero) => (
        <div>{hero}</div>
      ))}
    </>
  );
};
