import React from 'react'
import Loader from 'react-loader-spinner'

export default ({ width, height, color }) => (
  <Loader type='Oval' color={color} height={height} width={width} />
)
