import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/clkhvd0xc7f6r01t503pngtcv/master"
);

const QUERY = gql`
  {
    posts{
      id,
      title,
      slug,
      datePublished
      content{
        html
      }
      author{
        name,
        avator{
          url
        }
      }
      coverPhoto{
        url
      }
    }
  }
`
export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default function Home({ posts }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            slug={post.slug}
            datePub={post.datePublished}
          />
        ))}
      </main>

    </div>
  )
}
