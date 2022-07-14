import React, { useRef } from 'react'
import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue }) => {

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
            onChange={(e) => {
                setColorValue(e.target.value)
                // had to npm i colornames -S , to add colornames as dependency.
                // colornames translates the name of the colors to a hexvalue, and set the hexvalue to a new state.
                setHexValue(colorNames(e.target.value) )   
            }}
        />
    </form>
  )
}

export default Input