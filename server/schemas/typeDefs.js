const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input SearchBooks {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: SearchBooks!): User
    removeBook(bookId: ID!): User
  }
`;
//saveBook(input: SearchBooks): User
module.exports = typeDefs;