import React from 'react'
import ColumnTitle from './ColumnTitle'
import Card from './Card'

const Column = (props) =>{
    const {columnNumber} = props
    return(
        <div className="column-container">
            {/* Caso Al crear la columna:
                <ColumnTitle 
                    title="title-column-1"
                    titleId="title-column-1"
                />
                <label className="column-number">Columna #{columnNumber}</label>
                <button><i className="new-task-icon far fa-plus"></i></button>
            */}
            <ColumnTitle 
                title="title-column-1"
                titleId="title-column-1"
            />
            <label className="column-number">Columna #{columnNumber}</label>
            <button><i className="new-task-icon far fa-plus"></i></button>
            <Card 
                cardTitle="Tarea de matematica"
                cardNumber="25055"
                date="15/10/2020 12:55pm"
                description="xdd"
            />
        </div>
    )
}

export default Column