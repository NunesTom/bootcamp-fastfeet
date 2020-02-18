import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        zip_code: Sequelize.STRING,
        country: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default Recipient;
