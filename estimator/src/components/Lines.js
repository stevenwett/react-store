import React from 'react';

function Lines({ lines, editLine, removeLine }) {
  const lineList = lines.map(line => {
    return (
      <div className="line" key={ line.id }>
        <form onSubmit={ (e) => { e.preventDefault(); } }>
          <label htmlFor="text">Line Text</label>
          <input type="text" id="text" onChange={ (e) =>{ editLine(e.target.value, line.id); } } value={ line.text } />
          <button onClick={ () =>{ removeLine(line.id); } }>Remove line</button>
        </form>
      </div>
    )
  })
  return (
    <div className="line-list">
      { lineList }
    </div>
  )
}

export default Lines;
