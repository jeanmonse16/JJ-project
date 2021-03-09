import React from 'react'

const FilesAttach = (props) => {
  const { fileColor, fileName, fileIcon, handleClick } = props
  return (
    <div className='file-attach' style={{ backgroundColor: `${fileColor}` }} onClick={handleClick}>
      <div className='file-name'>
        <p>{fileName}</p>
      </div>
      <div className='file-attach-preview'>
        <i className={fileIcon} />
      </div>
    </div>
  )
}

export default FilesAttach
