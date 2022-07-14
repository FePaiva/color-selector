import React from 'react'
import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {

  return (
    <form onSubmit={(e) => e.preventDefault()} >
        <label htmlFor="addColor">Add Color Name: </label>
        <input 
            autoFocus
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
        <button className="btn"
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
    </form>
  )
}

export default Input