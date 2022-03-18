const TypeModel = (sequelize, Sequelize) => {
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

  return sequelize.define('type', schema, { tableName: 'type' })
}

module.exports = TypeModel
