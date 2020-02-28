'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_controle_presenca_crianca', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      presente: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      crianca_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_crianca', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      },
      evento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_evento', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      entidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_entidade', key: 'id' },
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
    return queryInterface.dropTable('tb_controle_presenca_crianca');
  }
};
