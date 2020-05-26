'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Paciente extends Model {
  static get table() {
    return 'paciente';
  }
}

module.exports = Paciente
