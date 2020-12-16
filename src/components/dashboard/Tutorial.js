import React from 'react'
import ButtonGroup from '../ButtonGroup'

const Tutorial = () =>{
    return(
        <div className="tutorial-modal">
            <div className="tutorial-start">
                <div className="tutorial-body">
                    <i className="tutorial-modal-exit-icon far fa-times"></i>
                    <h2>TUTORIAL INICIAL</h2>
                    <i className="scroll-icon fal fa-books"></i>
                    <p>El tutorial te permitara realizar un recorrido por las funcionalidades basicas de TaskMater</p>
                    <label>Podras saltarlo en cualquier momento que desees</label>
                    <div className="tutorial-button-section">
                        <ButtonGroup 
                            buttonText = "SALTAR"
                        />
                        <ButtonGroup 
                            buttonText = "ACEPTAR"
                        />
                    </div>
                </div>
            </div>
            <div className="tutorial-step-one">
                <div className="number">
                    <label>#1</label>
                </div>
                <h3>Lo primero que tienes que hacer es crear una nueva columna</h3>
                <p>Para ello tienes que hacer click donde dice:</p>
                <p><b>"Añadir una nueva columna"</b></p>
                <div className="step-one-button-section">
                    <ButtonGroup 
                        buttonText = "SALTAR"
                    />
                    <ButtonGroup 
                        buttonText = "CONTINUAR"
                    />
                </div>
            </div>
            <div className="tutorial-step-two">
                <div className="number">
                    <label>#2</label>
                </div>
                <h3>Ahora añadele un titulo a la columna</h3>
                <p>Esto te servira para clasificar tus actividades, como por ejemplo una columna para tus tareas, otra para tus reuniones y etcetera.</p>
                <p>Para ello tienes que hacer click donde dice:</p>
                <p><b>"Titulo columna #1"</b></p>
                <p>Y escribes el titulo que desees</p>
                <div className="step-one-button-section">
                    <ButtonGroup 
                        buttonText = "SALTAR"
                    />
                    <ButtonGroup 
                        buttonText = "CONTINUAR"
                    />
                </div>
            </div>
            <div className="tutorial-step-three">
                <div className="number">
                    <label>#3</label>
                </div>
                <h3>Lo siguiente es añadir una actividad</h3>
                <p>Para ello tienes que hacer click al boton con el simbolo:</p>
                <p><b>"<i className="new-task-icon far fa-plus"></i>"</b></p>
                <div className="step-one-button-section">
                    <ButtonGroup 
                        buttonText = "SALTAR"
                    />
                    <ButtonGroup 
                        buttonText = "CONTINUAR"
                    />
                </div>
            </div>
            <div className="tutorial-step-four">
                <div className="number">
                    <label>#4</label>
                </div>
                <h3>Ahora rellena los campos para añadir la actividad</h3>
                <p>Esta es la ventana para añadir actividades, cada una de las cuales tiene su titulo, fecha, descripcion y hasta 4 archivos para agregarle en caso de que lo requieras.</p>
                <p>Una vez rellenados los campos, para agregar la nueva actividad a la columna que creaste has click en el boton:</p>
                <p><b>"GUARDAR"</b></p>
                <div className="step-one-button-section">
                    <ButtonGroup 
                        buttonText = "SALTAR"
                    />
                    <ButtonGroup 
                        buttonText = "CONTINUAR"
                    />
                </div>
            </div>
            <div className="tutorial-step-five">
                <div className="number">
                    <label>#5</label>
                </div>
                <h3>¡Listo! Ya creaste tu primera actividad</h3>
                <p>Las actividades que vayas creando apareceran como pequeñas tarjetas en las columnas donde las coloques.</p>
                <p>Podras echar un vistazo de toda la informacion que tiene la actividad, incluyedo su archivos subidos.</p>
                <div className="step-one-button-section">
                    <ButtonGroup 
                        buttonText = "SALTAR"
                    />
                    <ButtonGroup 
                        buttonText = "CONTINUAR"
                    />
                </div>
            </div>
            <div className="tutorial-end">
                <div className="tutorial-body">
                    <i className="tutorial-modal-exit-icon far fa-times"></i>
                    <h2>TUTORIAL COMPLETADO</h2>
                    <i class="check-icon fal fa-check-circle"></i>
                    <p>¡Felicidades!, Ya has completado el tutorial basico de TaskMaster</p>
                    <label>Para conocer mas funcionalidades que puedes hacer en tu organizador de actividades revisa el apartado de "Trucos y consejos" en la seccion de "Ayuda"</label>
                    <div className="tutorial-button-section">
                        <ButtonGroup 
                            buttonText = "CERRAR"
                        />
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Tutorial