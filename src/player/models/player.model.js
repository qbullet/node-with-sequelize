const PlayerModel = (sequelize, Sequelize) => {
  const schema = {
    id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: 'name'
    },
  }

  return sequelize.define('player', schema, { tableName: 'player' })
}

module.exports = PlayerModel
