import React from 'react'

const ColumnTitle = (props) =>{
    const {title, titleId} = props
    return(
        <div className="column-title-cotainer">
            <input type="text" id={titleId} defaultValue={title} />
            <i className="edit-title-icon fal fa-pencil-alt"></i>
        </div>
    )
}

export default ColumnTitle