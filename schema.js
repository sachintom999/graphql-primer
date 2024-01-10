import db from "./db"

export const typeDefs = `#graphql

type Game {
  id: ID!
  title: String
  platform: [String!]
}

type Query {
  games: [Game]
}
`

export const resolvers = {
    games: () => db.games,
}


