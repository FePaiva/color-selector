import React, { useEffect } from 'react'
import { useState } from 'react';

const BigBox = ({ colorValue }) => {

  // const colorAPI = 'http://www.colourlovers.com/api'

  

  return (
    <section
        className='square'
        style={{ backgroundColor: colorValue }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  )
}

BigBox.defaultProps = {
  colorValue: "No color selected."
}

export default BigBox