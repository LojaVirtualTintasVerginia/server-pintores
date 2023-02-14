import { env } from './src/env'

module.exports = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
      migrations: {
        extension: 'ts',
        directory: './src/database/migrations',
      },
  seeds: {
    directory: './src/database/seeds',
  },
  useNullAsDefault: true,
};