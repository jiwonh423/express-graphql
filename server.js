const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const path = require("path");
const app = express();
const port = 4000;

const loadedTypes = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const loadedResolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
  typeDefs: loadedTypes,
  // 스키마의 단일 필드에 대한 데이터를 채우는 역할
  // ex) 특정 조건에 대한 필터링 적용
  resolvers: loadedResolvers,
});

const root = {
  posts: require("./posts/posts.model"),
  comments: require("./comments/comments.model"),
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
