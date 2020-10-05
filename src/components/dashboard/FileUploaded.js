import React from 'react'

const FileUploaded = (props) =>{
    const {fileUpIcon, fileUpName, fileColor} = props
    return(
        <div className="file-up-container" style={{backgroundColor: `${fileColor}`}}>
            <i className={fileUpIcon}></i>
            <p>{fileUpName}</p>
            <i className=" file-delete far fa-trash"></i>
        </div>
    )
}

export default FileUploaded