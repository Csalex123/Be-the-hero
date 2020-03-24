//Método UP é responsável pela criação da tabela
exports.up = function(knex) {
    knex.schema.createTable('ongs', (table)=>{
      /*Colunas da tabela*/
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
  };
  
  /* Método down desfaz o que foi feito na tabela assim (deleta etc) */
  exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
  };
  