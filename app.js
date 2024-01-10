import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import db from "./_db"

const typeDefs = `#graphql


type Game {
    id: ID!
    title: String!
    platform : [String!]
}

type Query {

    games:[Game]

}


`

const resolvers = {
    Query:{
        games() {

            return db.games

        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}  `)
