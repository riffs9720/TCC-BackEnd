'use strict'

const Prontuario = use('App/Models/Prontuario')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ProntuarioController {

  /**
   * Show a list of all Prontuarios.
   * GET Prontuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const prontuario = await Prontuario.all()

    return prontuario
  }

  /**
   * Create/save a new Prontuario.
   * POST Prontuario
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const prontuario = await Prontuario.create(data)

    return prontuario
  }

}

module.exports = ProntuarioController
