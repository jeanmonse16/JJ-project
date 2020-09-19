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
                notificationAcount="1"
            />
            <div className="principal-menu-container">
                <label id="add-btn">Añadir
                    <div className="options">
                        <label>Nueva tarea</label>
                        <label>Nueva Columna</label>
                    </div>
                </label>
                <label id="edit-btn">Edición
                    <div className="options">
                        <label>Paso adelante</label>
                        <label>Paso atrás</label>
                        <hr />
                        <label>Editar tarea</label>
                        <label>Editar Columna</label>
                        <hr />
                        <label>Cotar</label>
                        <label>Copiar</label>
                        <label>Pegar</label>
                    </div>
                </label>
                <label id="select-btn">Selección
                    <div className="options">
                        <label>Todo</label>
                        <label>Deseleccionar</label>
                        <label>Volver a seleccionar</label>
                    </div>
                </label>
                <label id="view-btn">Vista
                    <div className="options">
                        <label>Cambiar color</label>
                    </div>
                </label>
                <label id="search-btn">Buscar
                    <div className="options">
                        <div className="search-task-container">
                            <input type="text" placeholder="Ingresa el titulo de la tarea" />
                            <i className="search-task-icon far fa-search"></i>
                        </div>
                    </div>
                </label>
                <label id="help-btn">Ayuda
                    <div className="options">
                        <label>Bienvenida</label>
                        <label>Documentacion</label>
                        <label>Trucos y consejos</label>
                        <hr />
                        <label>Siguenos en Instagram</label>
                        <label>Siguenos en Youtube</label>
                        <label>Siguenos en Twitter</label>
                        <hr />
                        <label>Reportar problema</label>
                        <hr />
                        <label>Acerca de</label>
                    </div>
                </label>
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
                        <hr className="separation"/>
                    </div>
                    <div className="column-container">
                        <ColumnTitle 
                            title="Eventos"
                            titleId="title-column-2"
                        />
                        <hr className="separation"/>
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