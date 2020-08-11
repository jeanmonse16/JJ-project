import React from 'react'

const Go = (props) => {
    const {goText} = props
    return(
        <button className="btn" type="submit">{goText}</button>
    )
}

export default Go