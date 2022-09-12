import { useQuery } from 'react-query';
import axios from 'axios';

export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data: { data: superheroes },
  } = useQuery(['super-heroes'], () => {
    return axios('http://localhost:4000/superheroes');
  });

  console.log(isLoading, isError, error, superheroes);

  return (
    <>
      <div>RQ Super Heroes Page</div>
      <ul>
        {superheroes?.map((superhero) => {
          return <li key={superhero.id}>{superhero.name}</li>;
        })}
      </ul>
    </>
  );
};
