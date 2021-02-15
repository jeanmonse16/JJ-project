import React from 'react'
import '../assets/styles/inputGroup.css'

const InputGroup = (props) => {
  const { inputType, inputName, inputPlaceHolder, onChange } = props
  return (
    <div className='input-group'>
      <input type={inputType} name={inputName} placeholder={inputPlaceHolder} onChange={onChange} onInput={onChange} onPaste={onChange} autoComplete='on' />
    </div>
  )
}

export default InputGroup
