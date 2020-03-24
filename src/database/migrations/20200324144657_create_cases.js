
exports.up = function(knex) {
    knex.schema.createTable('cases', (table) => {
        table.increments(); //Id com chave primary e auto increment
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        
        //Adicionando o valor 'id' que está na tabela 'ongs' nessa chave estrangeira na coluna 'ong_id'
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cases');
};
