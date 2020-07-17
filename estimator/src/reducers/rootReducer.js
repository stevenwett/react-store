const initState = {
	lines: [
		{id: 1, text: 'Example line'},
		{id: 2, text: 'Example line2'},
		{id: 3, text: 'Example line3'}
	]
}

const rootReducer = (state = initState, action) => {
	// console.log(action);
	console.log(state);
	if (action.type === 'DELETE_LINE') {
		let newLines = state.lines.filter(line => {
			return action.id !== line.id
		});
		return {
			...state, 
			lines: newLines
		}
	}
	return state;
}

export default rootReducer;
