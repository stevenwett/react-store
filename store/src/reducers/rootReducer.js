const initState = {
  lines: [
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'EDIT_LINE') {
    let newLines = [...state.lines]
    let updatedLine = newLines.find(line => line.id === action.line.id);
    updatedLine['text'] = action.line.text
    return {
      ...state, 
      lines: newLines
    }
  }

  if (action.type === 'ADD_LINE') {
    let newLine = {
      id: Math.random(),
      text: action.text
    }
    let newLines = [...state.lines, newLine];
    return {
      ...state, 
      lines: newLines
    }
  }

  if (action.type === 'DELETE_LINE') {
    let newLines = state.lines.filter(line => {
      return action.id !== line.id
    });
    return {
      ...state, 
      lines: newLines
    }
  }

  if (action.type === 'GET_LINES') {
    return {
      ...state,
      lines: state.lines
    }
  }
  return state;
}

export default rootReducer;
