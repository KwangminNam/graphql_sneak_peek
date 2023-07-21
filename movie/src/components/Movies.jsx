import { gql, useQuery } from '@apollo/client';
import {Link} from 'react-router-dom'
import { getBG } from '../util/util';


const ALL_MOVIE = gql`
  query getMovies {
    allMovies{
          title
          id
          backdrop_path
      },
  }
`

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIE);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    return <h2>Error</h2>
  }

  return (
    <>
      <ul>
        {data.allMovies.map(item =>
          <li key={item.id}>
            <Link to={`/movie/${item.id}`}>{item.title}</Link>
            <img src={getBG(item.backdrop_path)} alt={item.title} />
          </li>)}
      </ul>
    </>
  )
}
