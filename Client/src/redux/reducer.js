const initialState = {
    pokemons: [],
    types: [],
    filtered: [],
    detail: {},
    loading: false,
    error: {},
    darkMode: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                filtered: action.payload,
                loading: true
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'GET_POKEMON_BY_NAME':
            return {
                ...state,
                pokemons: state.pokemons.filter((pokemon) => pokemon.name === action.payload.name),
                loading: true
            }
        case 'CREATE_POKEMON':
            if (action.payload.status === 200) {
            return {
                ...state,
            }} else {
            return {
                ...state,
                error: action.payload.send
            }}
        case 'DELETE_POKEMON':
            return {
                ...state,
                detail: {},
            }
        case 'GET_POKEMON_DETAIL':
            return {
                ...state,
                detail: action.payload,
                loading: false,
            }
        case 'CLEAR_DETAIL':
            return {
                ...state,
                detail: {}
            }
        case 'FILTER_BY_TYPE':
            let filtered = state.filtered
            let byType = filtered?.filter((pokemon) => pokemon.types.includes(action.payload))
            if (action.payload === 'All') byType = filtered
            return {
                ...state,
                pokemons: byType
            }
        case 'FILTER_CREATED':
            let filterCreated = state.filtered;
            let byCreated = [];
            if (action.payload === 'created') {
                byCreated = filterCreated.filter((pokemon) => pokemon.id >= 152);
            } else if (action.payload === 'not-created') {
                byCreated = filterCreated.filter(
                (pokemon) =>
                    (pokemon.id >= 1 && pokemon.id <= 151)          // (pokemon.id >= 1 && pokemon.id <= 1010) || (pokemon.id >= 10001 && pokemon.id <= 10271)
                );
            } else {
                byCreated = filterCreated;
            }
            return {
                ...state,
                pokemons: byCreated,
            }
        case 'SORT_BY_NAME':
            const byName = [...state.pokemons].sort((a, b) => {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) return action.payload === 'A-Z' ? -1 : 1
                if (nameA > nameB) return action.payload === 'A-Z' ? 1 : -1
                return 0
            })
            return {
                ...state,
                pokemons: byName
            }
        case 'SORT_BY_ATTACK':
            const byAttack = [...state.pokemons]
            byAttack.sort((a, b) => action.payload === 'min' ? a.attack - b.attack : b.attack - a.attack)
            return {
                ...state,
                pokemons: byAttack,
            }
        case 'SORT_BY_DEFENSE':
            const byDefense = [...state.pokemons]
            byDefense.sort((a, b) => action.payload === 'min' ? a.defense - b.defense : b.defense - a.defense)
            return {
                ...state,
                pokemons: byDefense,
            }
        case 'SORT_BY_SPEED':
            const bySpeed = [...state.pokemons]
            bySpeed.sort((a, b) => action.payload === 'min' ? a.speed - b.speed : b.speed - a.speed)
            return {
                ...state,
                pokemons: bySpeed,
            }
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return { ...state }
    }
}

export default reducer