import React from 'react'

const FileUploaded = (props) => {
  const { fileUpIcon, fileUpName, fileColor, handleRemove } = props
  return (
    <div className='file-up-container' style={{ backgroundColor: `${fileColor}` }}>
      <i className={fileUpIcon} />
      <p>{fileUpName}</p>
      <div onClick={handleRemove}>
        <i className=' file-delete far fa-trash' />
      </div>
    </div>
  )
}

export default FileUploaded
