import Miro from '@mirohq/miro-node'
import Fastify from 'fastify'

const fastify = Fastify()
const miro = new Miro()

fastify.get('/login', async (_req, reply) => {
  if (await miro.isAuthorized('some_user_id')) {
    reply.redirect('/')
    return
  }
  reply.redirect(miro.getAuthUrl())
})

fastify.get('/auth/miro/callback', async (req, reply) => {
  await miro.handleAuthorizationCodeRequest('some_user_id', req)
  reply.redirect('/')
})

fastify.get('/', async () => {
  const api = miro.as('some_user_id')
  const boards = await api.getBoards()
  const board = boards[0]
  const [item] = await board.getItems()
  return item
})
;(async () => await fastify.listen({port: 4000}))()
