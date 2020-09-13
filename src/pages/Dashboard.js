import React from 'react'
import '../styles/dashboard.css'
import Top from '../components/dashboard/Top'
import ColumnTitle from '../components/dashboard/ColumnTitle'
import Card from '../components/dashboard/Card'

const Dashboard = () =>{
    return(
        <div className="dashboard-container">
            <Top 
                username = "DictadorMarico69"    
            />
            <div className="principal-menu-container">
                <nav>
                    <ul>
                        <li><label id="add-button">Añadir</label></li>
                        <li><label id="edit">Edición</label></li>
                        <li><label id="select">Selección</label></li>
                        <li><label id="view">Vista</label></li>
                        <li><label id="search">Buscar</label></li>
                        <li><label id="help">Ayuda</label></li>
                    </ul>
                </nav>
            </div>
            <div className="task-container">
                <div className="task-center">
                    <div className="column-container">
                        <ColumnTitle 
                            title="Tareas"
                            titleId="title-column-1"
                        />
                        <Card 
                            cardTitle="Tarea"
                            date="10/10/10 12:55pm"
                            description="xdd"
                        />
                        <hr />
                    </div>
                    <div className="column-container">
                        <ColumnTitle 
                            title="Eventos"
                            titleId="title-column-2"
                        />
                        <hr />
                    </div>
                    <div className="column-container">
                        <ColumnTitle 
                            title="Juegos"
                            titleId="title-column-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard