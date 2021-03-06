'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('user/register', 'UserController.register')
  Route.post('user/login', 'UserController.login')
  Route.get('user/data', 'UserController.getProfile').middleware(['auth'])
  Route.get('user/recipes', 'RecipeController.index')
  Route.post('user/recipe', 'RecipeController.store')
}).prefix('api/v1')
