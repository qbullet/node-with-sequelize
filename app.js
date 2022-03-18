const express = require('express')
const app = express()
const db = require('./mysql.db')
db.sequelize.sync()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    datetime: new Date()
  })
})

app.get('/player', async (req, res) => {
  const players = await db.player.findAll({
    include: [
      { model: db.team },
      { model: db.type },
    ]
  })

  res.json({
    success: true,
    data: players
  })
})

app.post('/type',)

app.listen(3030, () => {
  console.log('THIS SERVER IS RUNNING ON 3030')
})
