const { Router } = require('express')
const { Pokemon, Type } = require('../db.js')
const { upload } = require('../uploads')
const { getPokemonByName, getPokemonById, getAll, getPokemonByIdFromDb } = require('../controllers/getPokemons.js')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const { name } = req.query
        
        if (name) {
            const pokemon = await getPokemonByName(name.toLowerCase())
            if (!pokemon){
                throw new Error("Pokemon not founded")
            } return res.status(200).send(pokemon)
        }
        const allPokemons = await getAll()
        return res.status(200).send(allPokemons)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (id <= 151 ) {                                         //    <-- SÓLO 1ra GENERACIÓN
//      if ((id >= 1 && id <= 1010) || (id >= 10001 && id <= 10271))    <-- TODOS LOS POKEMONES DE LA API
            const response = await getPokemonById(id)
            return res.status(200).send(response)
        } else {
            const fromDb = await getPokemonByIdFromDb(id)
            return res.status(200).send(fromDb)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

router.post('/', async (req, res) => {
    try {
        let { name, hp, attack, defense, speed, height, weight, types, custom } = req.body;
        const pokemonDb = await Pokemon.findAll();
        let id = 151 + pokemonDb.length
//      let id = 10271 + pokemonDb.length //    <-- CREO UN POKEMON CON UN ID POR ENCIMA DEL MAXIMO DE LA API
        const find = await Pokemon.findOne({ where: {name: name}})
        
        if (!name || !hp || !attack || !defense || !speed || !height || !weight || !types) throw new Error ("Missing parameters");
        if (find) throw new Error ("Pokemon already exists");
        let imgUrl = "https://64.media.tumblr.com/f4918498af34c8764de970a2ca76795b/tumblr_mvzj2elEQA1rfjowdo1_500.gif";

        const newPokemon = { id: ++id, name, hp, attack, defense, speed, height, weight, imgUrl, custom }
        const create = await Pokemon.create(newPokemon);

        let pokemonType = await Type.findAll({where: {name: types}});
        await create.addType(pokemonType);

        res.status(200).send("Pokemon successfully Created");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// router.post('/', upload, async (req, res) => {
//     try {
//         let { name, hp, attack, defense, speed, height, weight, types, custom } = req.body;
//         const pokemonDb = await Pokemon.findAll();
//         let id = 151 + pokemonDb.length;
//         const find = await Pokemon.findOne({ where: { name: name } });

//         if (!name || !hp || !attack || !defense || !speed || !height || !weight || !types) throw new Error ("Missing parameters");
//         if (find) throw new Error ("Pokemon already exists");
//         let imgUrl = req.file ? req.file.path : "https://64.media.tumblr.com/f4918498af34c8764de970a2ca76795b/tumblr_mvzj2elEQA1rfjowdo1_500.gif";

//         const newPokemon = { id: ++id, name, hp, attack, defense, speed, height, weight, imgUrl, custom };
//         const create = await Pokemon.create(newPokemon);

//         let pokemonType = await Type.findAll({ where: { name: types } });
//         await create.addType(pokemonType);

//         res.status(200).send("Pokemon successfully Created");
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// });

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const pokemon = await Pokemon.findByPk(id)
        if (pokemon){
            await pokemon.destroy()
            res.status(200).send("Pokemon deleted successfully")
        } else {
            throw new Error ("Cannot delete pokemon")
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

module.exports = router