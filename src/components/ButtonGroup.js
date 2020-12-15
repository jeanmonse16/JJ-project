import React from 'react'
import Spinner from '../_utils/Spinner'
import '../assets/styles/buttonGroup.css'

const ButtonGroup = (props) => {
  const {buttonText , handleClick, loading = null } = props
  return (
    <button className='btn' type='submit' onClick={handleClick}>{!loading ? buttonText : <div style={{ marginTop: '3px' }}> <Spinner color='#fff' width={20} height={20} /> </div>}</button>
  )
}

export default ButtonGroup
