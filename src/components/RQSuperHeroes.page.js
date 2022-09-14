import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ['super-heroes'],
    fetchSuperHeroes,
    {
      enabled: false, // ova opcija sluzi da kazemo query-ju da se ne fetcuje kada se komponenta mount-uje (ucita), i onda mozemo da vratimo iz useQuery-a refetch funkciju koju pozivamo na neki event, klik ili slicno
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong. {error.message}</h2>;
  }

  return (
    <>
      <div>RQ Super Heroes Page</div>
      <button onClick={refetch}>Fetch heroes</button>
      <ul>
        {data?.data.map((superhero) => {
          return <li key={superhero.id}>{superhero.name}</li>;
        })}
      </ul>
    </>
  );
};
