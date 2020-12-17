const initialState = {
    catalog: [],
    selected: {}
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_PRODUCTS":
            return {...state, catalog: action.prod}
        case "ADD_TO_CART":
            return {
                ...state,
                selected: {...state.selected, [action.id]:(state.selected[action.id] || 0) + 1}
            }
        case "REMOVE_FROM_CART":
            const selected = {...state.selected, [action.id]:(state.selected[action.id] || 0) - 1}
            if (selected[action.id] < 1){
                delete selected[action.id]
            }
            return {
                ...state,
                selected
            }
        case 'SORT_CATALOG':
            return{...state, catalog:action.catalog}

        default:
            return state
    }
}