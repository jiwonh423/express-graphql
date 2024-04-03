const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = 4000;

const schema = buildSchema(`
  type Query{
    Posts : [Post]
    Comments : [Comment]
  }

  type Post{
    id: ID!
    title : String!
    description : String!
    comments : [Comment]
  }

  type Comment{
    id : ID!
    text : String!
    likes : Int
  }
`);

const root = {
  Posts: [
    {
      id: "post1",
      title: "first post",
      description: "first post has own description",
      comments: [
        {
          id: "comment1",
          text: "It is first comment for post1",
          likes: 1,
        },
        {
          id: "comment2",
          text: "It is second comment for post1",
          likes: 3,
        },
      ],
    },
  ],
  Comments: [
    {
      id: "comment1",
      text: "It is first comment for post1",
      likes: 1,
    },
    {
      id: "comment2",
      text: "It is second comment for post1",
      likes: 3,
    },
  ],
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("Running a GraphQl API server at localhost");
});
