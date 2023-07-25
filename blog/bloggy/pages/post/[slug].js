import { assertAbstractType } from 'graphql';
import { GraphQLClient, gql } from 'graphql-request';


const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/clkhvd0xc7f6r01t503pngtcv/master"
);

const QUERY = gql`
  query Post($slug:String!){
    post(where: {slug:$slug}){
      id,
      title,
      slug,
      datePublished,
      author{
        id
        name
        avator{
          url
        }
      }
      content{
        html
      }
      coverPhoto{
        id
        url
      }
    }
  }
`

const SLUGLIST = gql`
  {
    posts{
      slug
    }
  }
`

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  console.log(posts);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}


export async function getStaticProps({params}) {

  const slug = params.slug;

  const data = await graphcms.request(QUERY,{slug});
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

export default function BlogPost({post}){
  return(
    <main>
      <h2>{post.title}</h2>
      <img src={post.coverPhoto.url} alt="" />
      <div>
        <img src={post.author.avator.url} alt="" />
        <div>
          <span>{post.author.name}</span>
          <span>{post.datePub}</span>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: post.content.html}}>

      </div>
    </main>
  )
}