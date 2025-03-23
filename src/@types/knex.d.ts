// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/table' {
  export interface tables {
    transactions: {
      id: string
      title: string
      amount: string
      created_at: string
      session_id?: string
    }
  }
}
