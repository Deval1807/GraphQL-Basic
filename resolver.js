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
  Game: {
    reviews: (parent) => {
        return dummy.reviews.filter((review) => review.game_id === parent.id)
    }
  },
  Author: {
    reviews: (parent) => {
        return dummy.reviews.filter((review) => review.author_id === parent.id)
    }
  },
  Review: {
    author: (parent) => {
        return dummy.authors.find((author) => author.id === parent.author_id)
    },
    game: (parent) => {
        return dummy.games.find((game) => game.id === parent.game_id)
    }
  },
  Mutation: {
    deleteGame: (_, args) => { 
        // logic for deleting
        dummy.games = dummy.games.filter((game) => args.id !==  game.id)
        return dummy.games
    },
    addGame: (_, args) => {
        let newGame = {
            ...args.game,
            id: Math.floor(Math.random()*10000).toString()
        }
        dummy.games.push(newGame);
        return dummy.games
    },
    updateGame: (_, args) => {
        dummy.games = dummy.games.map((game) => {
            if(game.id === args.id) {
                return { ...game, ...args.edits }
            }
            return game;
        })

        return dummy.games.find((game) => game.id === args.id)
    }
  }
};
