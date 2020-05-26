'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medico extends Model {
  static get table() {
    return 'medico';
  }
}

module.exports = Medico
