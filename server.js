//bring express, graphql, and gql modules into our server
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const app = express();

//set up our schema
//give a name to our schema, Yo
//create our fields, set up their type, and state what it returns
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Yo",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => "Yo" },
    }),
  }),
});

//tell our server to use the graphql dependency and listen on port 5000
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => {
  console.log("Servers up");
});
