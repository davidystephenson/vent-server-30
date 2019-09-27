const Sequelize = require('sequelize')
const db = require('../db')

const Vent = db.define(
  'vent',
  {
    name: Sequelize.STRING,
    open: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: 'some-vents'
  }
)

module.exports = Vent
