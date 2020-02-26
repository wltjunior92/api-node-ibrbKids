'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_membro', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_pai: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nome_mae: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ministerio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_ministerio', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_membro');
  }
};
