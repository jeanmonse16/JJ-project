import React from 'react'

const FilesAttach = (props) =>{
    const {fileColor, fileName, fileIcon} = props
    return(
        <div className="file-attach" style={{backgroundColor: `${fileColor}`}}>
            <div className="file-name">
                <p>{fileName}</p>
            </div>
            <div className="file-attach-preview">
                <i className={fileIcon}></i>
            </div>
        </div>
    )
}

export default FilesAttach

