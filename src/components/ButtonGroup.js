import React from 'react'
import Spinner from '../_utils/Spinner'
import '../assets/styles/buttonGroup.css'

const ButtonGroup = (props) => {
  const { buttonText, handleClick, loading = null, canSubmit = true } = props
  return (
    <button className={canSubmit ? 'btn activeBtn' : 'btn disabledBtn'} type='submit' onClick={(e) => canSubmit && handleClick(e)}>{!loading ? buttonText : <div style={{ marginTop: '3px' }}> <Spinner color='#fff' width={20} height={20} /> </div>}</button>
  )
}

export default ButtonGroup
