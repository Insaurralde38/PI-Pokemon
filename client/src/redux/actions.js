import axios from 'axios'

//-------------------------------------------------------------------------------- GET ALL POKEMONS --------------------------------------------------------------------------------//

export const getAllPokemons = () => {
    try {
        const endpoint = 'http://localhost:3001/pokemons'
        return async (dispatch) => {
        const { data } = await axios.get(endpoint)
            return dispatch({
                type: 'GET_ALL_POKEMONS',
                payload: data,
            })}
    } catch (error) { 
        console.log(error.message)
    }
}

//----------------------------------------------------------------------------------- GET TYPES ------------------------------------------------------------------------------------//

export const getTypes = () => {
    try {
        const endpoint = 'http://localhost:3001/types'
        return async (dispatch) => {
        const { data } = await axios.get(endpoint)
            return dispatch({
                type: 'GET_TYPES',
                payload: data,
            })}
    } catch (error) { 
        console.log(error.message)
    }
}

//------------------------------------------------------------------------------ GET POKEMON BY NAME -------------------------------------------------------------------------------//

export const getPokemonByName = (name) => {
    return async (dispatch) => {
      try {
        const endpoint = `http://localhost:3001/pokemons?name=${name}`;
        const { data } = await axios.get(endpoint);
          if (data.length === 0) {
          alert("That Pokémon doesn't exist");
        } else {
          dispatch({
            type: 'GET_POKEMON_BY_NAME',
            payload: data,
          });
        }
      } catch (error) { 
        console.log(error.message);
      }
    };
  }

//--------------------------------------------------------------------------------- CREATE POKEMON ---------------------------------------------------------------------------------//

export const createPokemon = (form) => {
    try {
        const endpoint = 'http://localhost:3001/pokemons'
        return async (dispatch) => {
        const { data } = await axios.post(endpoint, form)
            return dispatch({
                type: 'CREATE_POKEMON',
                payload: data,
            })}
    } catch (error) { 
        console.log(error.message)
    }
}

//--------------------------------------------------------------------------------- DELETE POKEMON ---------------------------------------------------------------------------------//

export const deletePokemon = (id) => {
    try {
        const endpoint = `http://localhost:3001/pokemons/${id}`
        return async (dispatch) => {
        const { data } = await axios.post(endpoint)
            return dispatch({
                type: 'DELETE_POKEMON',
                payload: data,
            })}
    } catch (error) { 
        console.log(error.message)
    }
}

//------------------------------------------------------------------------------------- DETAIL -------------------------------------------------------------------------------------//

export const getPokemonDetail = (id) => {
    try {
        const endpoint = `http://localhost:3001/pokemons/${id}`
        return async (dispatch) => {
        const { data } = await axios.get(endpoint)
            return dispatch({
                type: 'GET_POKEMON_DETAIL',
                payload: data,
            })}
    } catch (error) { 
        console.log(error.message)
    }
}

export const clearDetail = () => {
    return { type: 'CLEAR_DETAIL' }
}

//------------------------------------------------------------------------------------- FILTER -------------------------------------------------------------------------------------//

export const filterByType = (payload) => {
    return { type: 'FILTER_BY_TYPE', payload: payload }
}

export const filterCreated = (payload) => {
    return { type: 'FILTER_CREATED', payload: payload }
}

//-------------------------------------------------------------------------------------- SORT --------------------------------------------------------------------------------------//

export const sortByName = (byName) => {
    return { type: 'SORT_BY_NAME', payload: byName }
}

export const sortByAttack = (byAttack) => {
    return { type: 'SORT_BY_ATTACK', payload: byAttack }
}

export const sortByDefense = (byDefense) => {
    return { type: 'SORT_BY_DEFENSE', payload: byDefense }
}

export const sortBySpeed = (bySpeed) => {
    return { type: 'SORT_BY_SPEED', payload: bySpeed }
}

//-------------------------------------------------------------------------------- TOGGLE DARK MODE --------------------------------------------------------------------------------//

export const toggleDarkMode = (darkMode) => {
    return {type: "TOGGLE_DARK_MODE", payload: darkMode}
}