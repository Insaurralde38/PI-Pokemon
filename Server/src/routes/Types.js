const { Op } = require('sequelize');
const { Router } = require('express')
const { Type } = require('../db.js')
const { getTypes, createTypes } = require('../controllers/getTypes.js')
const router = Router()


router.get('/', async (req, res) => {
    try {
        await getTypes()
        const types = await Type.findAll({
            where: {
                name: {
                    [Op.notIn]: ['shadow', 'unknown', 'dark']
            }}})
        return res.json(types)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try {
        let { name } = req.query
        const typeDb = await Type.findAll()
        let id = 20 + typeDb.length        
        const type = await createTypes(name)
        return res.json(type)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router