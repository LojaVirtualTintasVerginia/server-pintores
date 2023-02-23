import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('points', (table) => {
    table.increments('id').primary()
    table.string('image').notNullable()
    table.string('obra').notNullable()
    table.string('obra1').notNullable()
    table.string('obra2').notNullable()
    table.string('email').notNullable()
    table.string('name').notNullable()
    table.string('resumo').notNullable()
    table.string('cpf').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('bairro').notNullable()
    table.string('uf', 2).notNullable()
    table.string('link_facebook').notNullable()
    table.string('link_instagram').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('points')
}
