import { ApolloServer,gql } from "apollo-server";


let db =[
  {
    id:"1",
    text:"11hello",
  },
  {
    id:"2",
    text:"22hello",
  },
]
let user = [
  {id:"1" ,firstName:'km',lastName:'nam'}
]

const typeDefs = gql`
  type User{
    id:ID!
    firstName:String!
    lastName:String
  }
  type Tweet {
    id:ID!
    text:String!
    author:User
  }
  type Query {
    allTweets:[Tweet!]!
    tweet(id:ID!):Tweet
    getUser:[User]
  }
  type Mutation {
    postTweet(text:String!, userId:ID!):Tweet!
    deleteTweet(id:ID!):Boolean!
  }
`;

const resolvers = {
  Query : {
    allTweets(){
      return db;
    },
    tweet(root,{id}){
      return db.find(item => item.id == id);
    },
    getUser(){
      return user;
    }
  },
  Mutation:{
    postTweet(__,{text,userId}){
      const newData = {id:db.length + 1,text};
      db.push(newData);
      return newData;
    },
    deleteTweet(__,{id}){
      const findTweet = db.find(item => item.id === id);
      if(!findTweet) return false;
      db = db.filter(item => item.id !== findTweet.id);
      return true;
    }
  }
}

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({url})=>{
  console.log('running'+url);
})