'use strict'

const Consulta = use('App/Models/Consulta')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ConsultaController {
  /**
   * Show a list of all Usuarios.
   * GET Usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const consulta = await Consulta.all()

    return consulta
  }

    /**
   * Create/save a new Usuarios.
   * POST Usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const consulta = await Consulta.create(data)

    return consulta
  }

}

module.exports = ConsultaController
