import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getBG } from '../util/util';


const GET_SINGLE_MOVIE = gql`
query ($getSingleMovieId: ID!) {
  getSingleMovie(id: $getSingleMovieId) {
    id
    title
    backdrop_path
    isLiked @client
  }
}
  `
export default function Movie() {
  const { id } = useParams()
  console.log(id);
  const { data, loading, error , client:{cache}} = useQuery(GET_SINGLE_MOVIE, {
    variables: {
      getSingleMovieId: id
    }
  });

  const onLike = () => {
    cache.writeFragment({
      id:`Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data:{
        isLiked:!data.getSingleMovie.isLiked
      }
    })
  }

  if (loading) {
    return <h2>Loading</h2>
  }
  if (error) {
    return <h2>Error</h2>
  }

  console.log(data)
  console.log(data.getSingleMovie.isLiked);


  return (
    <div>
      <div>{data.getSingleMovie.title}</div>
      <img src={getBG(data.getSingleMovie.backdrop_path)} alt={data.getSingleMovie.title} />
      <button onClick={onLike} type='button'>{data?.getSingleMovie?.isLiked ? '좋아요 취소' : '좋아요'}</button>
    </div>
  )
}
