'use strict'

const Usuario = use('App/Models/Usuario')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class LoginController {

  async autenticacao({ request, auth, response }){
    const { emailUsuario, password } = request.all()

    const token = await auth.attempt(emailUsuario, password)

    const user = await Usuario.findBy('emailUsuario', emailUsuario)

    return user;
  }

}

module.exports = LoginController
