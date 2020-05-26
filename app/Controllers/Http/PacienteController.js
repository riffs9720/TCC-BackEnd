'use strict'

const Paciente = use('App/Models/Paciente')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class PacienteController {

  /**
   * Show a list of all Pacientes.
   * GET Pacientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const paciente = await Paciente.all()

    return paciente
  }

  /**
   * Create/save a new Paciente.
   * POST Paciente
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const paciente = await Paciente.create(data)

    return paciente
  }

}

module.exports = PacienteController
