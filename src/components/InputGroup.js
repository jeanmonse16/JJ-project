import React from 'react'
import '../assets/styles/inputGroup.css'

const InputGroup = (props) => {
  const { inputType, inputName, inputPlaceHolder, onChange, customStyles } = props
  return (
    <div className='input-group'>
      <input style={customStyles ? { margin: '10px 0', width: '250px', height: '30px' } : null} type={inputType} name={inputName} placeholder={inputPlaceHolder} onChange={onChange} onPaste={onChange} autoComplete='on' />
    </div>
  )
}

export default InputGroup
