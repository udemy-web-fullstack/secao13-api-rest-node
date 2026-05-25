import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: Sequelize.STRING,
        filename: Sequelize.STRING,
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
