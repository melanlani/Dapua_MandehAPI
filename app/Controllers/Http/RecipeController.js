'use strict'

const Recipe = use('App/Models/Recipe')
const Database = use("Database");

class RecipeController {
async index ({ request, response, view }) {

  try {
    const recipes = await Database
                        .table('recipes')
                        .innerJoin('users', 'recipes.id_user', 'users.id')
    return response.status(200).send({recipes: recipes})
  }
  catch (e) {
    console.log(e);
    return response.status(400).send({'message':'Something went wrong!'})
  }

}


  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {

    try {
      const {judul, bahan, langkah, foto_resep, id_user} = request.post();
      const recipe = await new Recipe();
      recipe.judul = judul;
      recipe.bahan = bahan;
      recipe.langkah = langkah;
      recipe.foto_resep = foto_resep;
      recipe.id_user = id_user;
      await recipe.save();

      return response.status(200).send({'message': 'Add Data Success', recipe: recipe})
    }
    catch (e) {
      console.log(e);
      return response.status(400).send({'message':'Something went wrong!'})
    }

  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = RecipeController
