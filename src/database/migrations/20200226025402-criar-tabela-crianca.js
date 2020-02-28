'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_crianca', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      visitante: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATEONLY,
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
      url_foto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      entidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_entidade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      contato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_contato', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      },
      endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_endereco', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      },
      alergias: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      intolerancia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      restricao_doces_refri: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      restricao_frutas: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('tb_crianca');
  }
};
