const { Model, DataTypes } = require("sequelize");

class Cep extends Model {
  static init(connection) {
    super.init({
      cep: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      localidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      ibge: DataTypes.STRING,
      gia: DataTypes.STRING,
      ddd: DataTypes.STRING,
      siafi: DataTypes.STRING
    }, {
      sequelize: connection,
    });
  }
}

module.exports = Cep;