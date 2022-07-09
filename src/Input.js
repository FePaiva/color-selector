import React, { useRef } from 'react'

const Input = ({ colorValue, setColorValue }) => {

  const inputRef = useRef();



  return (
    <form className="addForm" onSubmit={(e) => e.preventDefault()} >
        <label htmlFor="addColor">Add Color Name: </label>
        <input 
            autoFocus
            ref={inputRef}
            type="text"
            placeholder="Add Color Name"
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Input