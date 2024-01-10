export const typeDefs = `#graphql


type Game{
    id: ID!
    title: String!
    platform: [String!]
    reviews: [Review!]
}

type Review{
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}


type Query{
    games: [Game]
    reviews: [Review]
    authors: [Author]
    game(id: ID!) : Game
    review(id: ID!) : Review
    author(id: ID!) : Author

}


`
