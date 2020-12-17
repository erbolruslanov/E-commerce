import data from '../../products'

export const setCatalog = () => {
    return {
        type: "SET_PRODUCTS",
        prod: data
    }
}

export const addToCart = (id) => {
    return {
        type: "ADD_TO_CART",
        id
    }
}
export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        id
    }
}


export const sortCatalog = (variant, catalog) => {
    switch (variant){
        case 'lower':
            catalog.sort((a, b) => a.price - b.price)
            break
        case 'high':
            catalog.sort((a, b) => b.price - a.price)
            break
        case 'a-z':
            catalog.sort((a, b) => a.name > b.name ? -1 : null)
            break
        case 'z-a':
            catalog.sort((a, b) => b.name > a.name ? -1 : null)
            break
    }
    return{type: 'SORT_CATALOG', catalog}
}