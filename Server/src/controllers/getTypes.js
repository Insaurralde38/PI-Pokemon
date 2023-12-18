const axios = require('axios')
const { Type } = require('../db.js')
const URL = 'https://pokeapi.co/api/v2/type'

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const getTypes = async () => {
    try {
      const response = await axios.get(URL);
      const types = response.data.results.map(type => type.name);
      types.sort();
      await Promise.all(
        types.map(async typeName => {
          await Type.findOrCreate({
            where: { name: typeName }
          });
        })
      );
      return types;
    } catch (error) {
      throw new Error("Types not found");
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const createTypes = async (typeName) => {
    try {
        const type = await Type.create({ name: typeName });
        return type;
    } catch (error) {
        throw new Error("Failed to create type");
    }
}

module.exports = { getTypes, createTypes }