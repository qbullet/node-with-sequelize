// import { Sequelize } from 'sequelize'
const { Sequelize } = require('sequelize')
const PlayerModel = require('./src/player/models/player.model')
const TeamModel = require('./src/team/models/team.model')
const TypeModel = require('./src/type/models/type.model')

const sequelize = new Sequelize(
  'my-sql-database',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.player = PlayerModel(sequelize, Sequelize)
db.team = TeamModel(sequelize, Sequelize)
db.type = TypeModel(sequelize, Sequelize)

db.team.hasMany(
  db.player,
  {
    foriegnKey: {
      name: 'teamId',
      field: 'id'
    }
  }
)

db.type.hasMany(
  db.player,
  {
    foriegnKey: {
      name: 'typeId',
      field: 'id'
    }
  }
)

db.player.belongsTo(
  db.team,
  {
    foriegnKey: 'teamId'
  }
)

db.player.belongsTo(
  db.type,
  {
    foriegnKey: 'typeId'
  }
)

module.exports = db
