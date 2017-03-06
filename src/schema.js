export default `enum TaskState {
  TASK_INBOX
  TASK_PINNED
  TASK_SNOOZED
  TASK_ARCHIVED
}

type Task {
  id: ID!
  title: String!
  state: TaskState!

  # These two are optional for now
  subtitle: String
  url: String

  # We'll use floats for dates for now, we could use a custom scalar
  updatedAt: Float!
}

type User {
  id: ID!
  email: String!
  hasGitHubToken: Boolean!
  hasTrelloToken: Boolean!
  tasks(state: TaskState!): [Task!]!
}

type Query {
  me: User
}

input CreateUserInput {
  email: String!
  password: String!
}

input UpdateTaskInput {
  state: TaskState!
}

type Mutation {
  createUser(input: CreateUserInput!): User
  addServiceToken(serviceName: String!, token: String!): User
  updateTask(id: ID!, input: UpdateTaskInput!): Task
}

schema {
  query: Query
  mutation: Mutation
}`;
