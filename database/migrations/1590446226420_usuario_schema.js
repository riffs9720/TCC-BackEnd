'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome')
      table.date('dtNascimento')
      table.string('rg')
      table.string('cpf')
      table.integer('telefone')
      table.string('endereco')
      table.string('email')
      table.string('senha')
      table.string('cep')
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
