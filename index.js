// to setup and configure the server
// since the type of the project is "module", we can directly use import and not use require()
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './schema.js'; 
import { resolvers } from './resolver.js'; 

// server setup
const server = new ApolloServer({
    // typedefs - description of our datatypes and the relationship they have with other data types
    // resolvers - bunch of functions, that determine how we respond to queries for different data on the graph
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 }
});

console.log("Server ready at port 3000");