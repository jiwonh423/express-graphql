const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const port = 4000;

const loadedTypes = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const loadedResolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: loadedTypes,
    // 스키마의 단일 필드에 대한 데이터를 채우는 역할
    // ex) 특정 조건에 대한 필터링 적용
    resolvers: loadedResolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(port, () => {
    console.log("Running a GraphQl API server at localhost");
  });
}

startApolloServer();

// model내 리턴하는 함수가 없는 경우에만 root필요
