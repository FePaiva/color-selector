import React from 'react'

const BigBox = ({ colorValue, hexValue, isDarkText }) => {

  // const colorAPI = 'http://www.colourlovers.com/api'

  

  return (
    <section
        className='square'
        // for the color to change based on the input.
        style={{ 
            backgroundColor: colorValue,
            color: isDarkText ? '#000' : '#FFF'
        }}
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