import express from 'express'
import {Miro} from '@mirohq/miro-node'

const app = express()

const miro = new Miro({
  clientId: '3458764532875095934',
  clientSecret: 'SgoAjkPYfF9NaHcVRevnY6GYwzfjtgtU',
  redirectUrl: 'https://plenty-bears-buy-208-127-180-6.loca.lt/auth/miro/callback',
})
const USER_ID = 3458764514451650476

app.get('/login', async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    await miro.handleAuthorizationCodeRequest(USER_ID, req)
    res.redirect('/')
    return
  }
  res.redirect(miro.getAuthUrl())
})

app.get('/auth/miro/callback/', async (req, res) => {
  try {
    await miro.handleAuthorizationCodeRequest(USER_ID, req)
  } catch (e) {
    console.log('handleAuthorizationCodeRequest failed:', e)
  }

  res.redirect('/')
})

app.get('/', async (req, res) => {
  const b = await miro.isAuthorized(USER_ID)
  if (!b) {
    res.redirect('/login')
    return
  }
  const api = miro.as(USER_ID)
  const boards = await api.getBoards()

  res.send(
    'Your boards:' +
      boards
        .map((board) => {
          return `<br><a href="${board.viewLink}">${board.name}</a>`
        })
        .join(''),
  )
})

app.listen(3000, () => console.log(`Listening on localhost, port 3000. http://localhost:3000`))
