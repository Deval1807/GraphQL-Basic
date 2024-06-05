import dummy from './dummyData.js';
/**
 * Even if we query something like
 * games {
 *   id
 * }
 * Even though we are returning whole gamae object,
 * Apollo will take care of it...and only return those fields which are requested
 */
export const resolvers = {
  Query: {
    games: () => {
      return dummy.games;
    },
    reviews: () => {
      return dummy.reviews;
    },
    authors: () => {
      return dummy.authors;
    },
    review: (_, args) => {
        return dummy.reviews.find((review) => review.id === args.id)
    },
    author: (_, args) => {
        return dummy.authors.find((author) => author.id === args.id)
    },
    game: (_, args) => {
        return dummy.games.find((game) => game.id === args.id)
    }
  },
};
