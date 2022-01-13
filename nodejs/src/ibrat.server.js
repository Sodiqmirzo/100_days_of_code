const { graphql } = require("graphql");
const schema = require("./ibrat/schema");
const resolvers = require("./ibrat/resolvers");
const Client = require("./ibrat/client.query");

graphql(schema, Client.Mutation.createTodo, resolvers).then((response) => {
  console.log(response.data);
});
