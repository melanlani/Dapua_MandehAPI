'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecipeSchema extends Schema {
  up () {
    this.create('recipes', (table) => {
      table.increments('id_resep')
      table.integer('id_user').unsigned()
      table
          .foreign('id_user')
          .references('users.id')
          .onDelete('cascade')
          .onUpdate('cascade')
      table.string('judul', 200).notNullable()
      table.text('bahan')
      table.text('langkah')
      table.string('foto_resep', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }
}

module.exports = RecipeSchema
