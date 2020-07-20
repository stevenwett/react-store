export const deleteProduct = (id) => {
	return {
		type: 'DELETE_PRODUCT',
		id
	}
}

export const addProduct = (product) => {
	return {
		type: 'ADD_PRODUCT',
		product
	}
}

export const editProduct = (product) => {
	return {
		type: 'EDIT_PRODUCT',
		product
	}
}
