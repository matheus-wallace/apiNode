import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Test Tansactions',
      amount: 1000,
    })
    .returning('*')

  return transactions
})
app.get('/transactions', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3000, enjoy!')
  })
