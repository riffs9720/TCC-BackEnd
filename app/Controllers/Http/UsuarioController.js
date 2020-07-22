'use strict'

const Usuario = use('App/Models/Usuario')
const DadosMedico = use('App/Models/DadosMedico')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UsuarioController {

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
    const usuario = await Usuario.all()

    return usuario
  }

  /**
   * Display a single usuario.
   * GET usuario/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const usuario = await Database
    .from('Usuario')
    .where({idUsuario: params.id})

    return usuario
  }

  /**
   * Create/save a new Usuario.
   * POST Usuario
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dataUsuario = request.only(['nomeUsuario', 'dtNascimentoUsuario', 'enderecoUsuario', 'telefoneUsuario', 'bairroUsuario', 'cidadeUsuario', 'cepUsuario', 'rgUsuario', 'cpfUsuario', 'emailUsuario', 'password', 'TipoUsuario_idTipoUsuario'])
    const usuario = await Usuario.create(dataUsuario)

    const crm = request.body.crm
    const especialidade = request.body.especialidade
    const Usuario_idUsuario = usuario.id

    const dataDadosMedico = {crm: crm, especialidade: especialidade, Usuario_idUsuario: Usuario_idUsuario}

    await DadosMedico.create(dataDadosMedico)

    return usuario
  }

// update ({ params, request, response }) {
//     const data = request.body
//     const usuario = await Database
//     .from('Usuario')
//     .where({idUsuario: params.id}).update(data)

//     return usuario
//   }

  /**
   * Delete a usuario with id.
   * DELETE usuario/:idusuario
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const usuario = await Database
    .from('Usuario')
    .where({idUsuario: params.id}).delete()
  }
}

module.exports = UsuarioController
