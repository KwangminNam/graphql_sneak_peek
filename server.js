import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

let db = [
  {
    id: "1",
    text: "11hello",
    userId: "1"
  },
  {
    id: "",
    text: "22hello",
    userId: "2"
  }
];
let user = [
  { id: "1", firstName: "km", lastName: "nam" },
  { id: "2", firstName: "km", lastName: "shin" }
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allMovies: [Movies!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    getSingleMovie(id: ID!): Movie
    getUser: [User]
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
  type Movies {
    adult: Boolean
    backdrop_path: String
    id: Int
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
    genre_ids: [Int]
  }
  type Movie {
    adult: Boolean
    backdrop_path: String
    budget: Int
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    revenue: Int
    runtime: Int
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int

  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return db;
    },
    tweet(root, { id }) {
      return db.find((item) => item.id == id);
    },
    getUser() {
      return user;
    },
    allMovies() {
      return fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=10923b261ba94d897ac6b81148314a3f"
      )
        .then((res) => res.json())
        .then((json) => json.results);
    },
    getSingleMovie(__, { id }) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDJkY2VjZjc5M2VhZDljMTgxM2FjOTFkNTVlODMzMyIsInN1YiI6IjYzMDEwMTQxYjM5ZTM1MDA4MmQ1YTI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4rzqk8JLgFsvNVb3qfyunf1Uyf1mAgbGCcDocYofMjg"
        }
      };
      const url = `https://api.themoviedb.org/3/movie/${id}`;
      return fetch(url, options)
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.error("error:" + err));
    }
  },
  Mutation: {
    postTweet(__, { text, userId }) {
      console.log(userId);
      const newData = {
        id: db.length + 1,
        text,
        userId
      };
      db.push(newData);
      return newData;
    },
    deleteTweet(__, { id }) {
      const findTweet = db.find((item) => item.id === id);
      if (!findTweet) return false;
      db = db.filter((item) => item.id !== findTweet.id);
      return true;
    }
  },
  User: {
    fullName({ id, firstName, lastName }) {
      return `${firstName}${lastName}`;
    }
  },
  Tweet: {
    author({ userId }) {
      const result = user.find((item) => item.id === userId);
      console.log(result);
      if (!result) console.log("NOPE");
      return result;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("running" + url);
});
