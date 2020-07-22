'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DadosMedico extends Model {
  static get table() {
    return 'DadosMedico';
  }
}

module.exports = DadosMedico
