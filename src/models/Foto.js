import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig.js';
export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: Sequelize.STRING,
        filename: Sequelize.STRING,

        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },

      {
        sequelize,
        modelName: 'Foto',
        freezeTableName: true,
        tableName: 'foto',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
