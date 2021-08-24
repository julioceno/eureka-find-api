const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Cep = require("../models/Cep");

const connection = new Sequelize(dbConfig);

Cep.init(connection)

module.exports = connection;