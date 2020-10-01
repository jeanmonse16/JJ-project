import React from 'react'

const CardModal = () =>{
    return(
        <div className="dash-modal">
            <div className="dash-body">
                <i className="dash-exit-icon far fa-times"></i>
                <h2>Añadir una actividad</h2>
                <div className="top">
                    <input type="text" placeholder="TITULO"/>
                    <input type="text" placeholder="DD/MM/AAAA"/>
                </div>
                <div className="center">
                    <textarea className="description-area" placeholder="DESCRIPCION" />
                </div>
                <div className="files-container">
                        <div className="file-box new-file"></div>
                        <div className="file-box"></div>
                        <div className="file-box"></div>
                        <div className="file-box"></div>
                    </div>
                <div className="bottom">
                    <button className="btn">DESCARTAR</button>
                    <button className="btn">GUARDAR</button>
                </div>

            </div>
        </div>
    )
}

export default CardModal