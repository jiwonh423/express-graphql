const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = 4000;

const schema = buildSchema(`
  type Query{
    description : String
  }
`);

const root = {
  description: "hello world",
};

app.use(
  "graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
  })
);

app.listen(port, () => {
  console.log("Running a GraphQl API server at localhost");
});
