const initState = {
  products: [
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'EDIT_PRODUCT') {
    let newProducts = [...state.products]
    let updatedProduct = newProducts.find(product => product.id === action.product.id);
    updatedProduct['quantity'] = action.product.quantity
    return {
      ...state, 
      products: newProducts
    }
  }

  if (action.type === 'ADD_PRODUCT') {
    let newProducts = [...state.products]
    let existingProduct = newProducts.find(product => product.slug === action.product.slug);
    if( undefined !== existingProduct ) {
      existingProduct['quantity']++
    } else {
      let newProduct = {
        id: Math.random(),
        slug: action.product.slug,
        name: action.product.name,
        quantity: 1
      }
      newProducts = [...state.products, newProduct];
    }
    return {
      ...state, 
      products: newProducts
    }
  }

  if (action.type === 'DELETE_PRODUCT') {
    let newProducts = state.products.filter(product => {
      return action.id !== product.id
    });
    return {
      ...state, 
      products: newProducts
    }
  }
  return state;
}

export default rootReducer;
