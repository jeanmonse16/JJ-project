import React from 'react'

const InputGroup = (props) =>{
    const {inputType, inputId, inputPlaceHolder} = props
    return(
        <div className="input-group">
            <input type={inputType} id={inputId} placeholder={inputPlaceHolder} />
        </div>
    )
}

export default InputGroup