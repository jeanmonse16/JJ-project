import React from 'react'

import '../assets/styles/loader.css'

export default (props) => {
    const {LoadingBarText, color} = props
    return(
        <div className="loader-container">
            <h2>TaskMaster</h2>
            <div className="mini-task-container">
                <div className="mini-column">
                    <div className="mini-title"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                </div>
                <div className="mini-column">
                    <div className="mini-title"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                </div>
                <div className="mini-column">
                    <div className="mini-title"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                </div>
                <div className="mini-column">
                    <div className="mini-title"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                    <div className="mini-card"></div>
                </div>
            </div>
            <div className="loading-bar">
                <div style={{backgroundColor: `${color}`}}></div>
                <div style={{backgroundColor: `${color}`}}></div>
                <div style={{backgroundColor: `${color}`}}></div>
                <p style={{color: `${color}`}}>{LoadingBarText}</p>
                <div style={{backgroundColor: `${color}`}}></div>
                <div style={{backgroundColor: `${color}`}}></div>
                <div style={{backgroundColor: `${color}`}}></div>
            </div>
        </div>
    )
}