import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios('http://localhost:4000/superheroes');
}

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error } = useQuery(['super-heroes'], fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Something went wrong. {error.message}</h2>
  }

  return (
    <>
      <div>RQ Super Heroes Page</div>
      <ul>{data?.data.map((superhero) => {
        return <li key={superhero.id}>{superhero.name}</li>;
      })}
      </ul>
    </>
  );
};
