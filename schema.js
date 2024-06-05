// 5 basic types - int, float, strings, boolean, ID
// ID type is used as a key

export const typeDefs = `#graphql
    type Game {
        id: ID!       # ! represents required field
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
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
`