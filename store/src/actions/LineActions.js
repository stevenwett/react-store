export const deleteLine = (id) => {
	return {
		type: 'DELETE_LINE',
		id
	}
}

export const addLine = (text) => {
	return {
		type: 'ADD_LINE',
		text
	}
}

export const editLine = (line) => {
	return {
		type: 'EDIT_LINE',
		line
	}
}

export const getLines = () => {
	return {
		type: 'GET_LINES'
	}
}
