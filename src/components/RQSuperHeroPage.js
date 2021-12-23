import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();

  const onSuccess = (data) => {
    console.log('success after data fetching hero', data);
  };

  const onError = (error) => {
    console.log('error after data error fetching hero', error);
  };

  const { isLoading, data, isError, error } = useSuperHeroData(
    heroId,
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return <div>{data?.data.name} - {data?.data.alterEgo}</div>;
};
