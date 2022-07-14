import React from 'react'

const BigBox = ({ colorValue, hexValue }) => {

  // const colorAPI = 'http://www.colourlovers.com/api'

  

  return (
    <section
        className='square'
        // for the color to change based on the input.
        style={{ backgroundColor: colorValue }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null }</p>
    </section>
  )
}

BigBox.defaultProps = {
  colorValue: "No color selected."
}

export default BigBox