// 5 basic types - int, float, strings, boolean, ID
// ID type is used as a key

export const typeDefs = `#graphql
    type Game {
        id: ID!       # ! represents required field
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # Define the entry type
    # Define where the user will land on the graph and start from
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): [Game]
        updateGame(id: ID!, edits: EditGameInput!): Game
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }
`