'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Consulta extends Model {
  static get table() {
    return 'consulta';
  }
}

module.exports = Consulta
