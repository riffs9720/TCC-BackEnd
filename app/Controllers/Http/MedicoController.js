'use strict'

const Medico = use('App/Models/Medico')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class MedicoController {

  /**
   * Show a list of all Medicos.
   * GET Medicos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const medico = await Medico.all()

    return medico
  }

  /**
   * Display a single medico.
   * GET medico/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const medico = await Database
    .from('medico')
    .where({idmedico: params.id})

    return medico
  }

  /**
   * Create/save a new Medico.
   * POST Medico
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const medico = await Medico.create(data)

    return medico
  }

  /**
   * Update medico details.
   * PUT or PATCH medico/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const medico = await Database
    .from('medico')
    .where({idmedico: params.id}).update(data)

    return medico
  }

  /**
   * Delete a medico with id.
   * DELETE medico/:idmedico
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const medico = await Database
    .from('medico')
    .where({idmedico: params.id}).delete()
  }
}

module.exports = MedicoController
