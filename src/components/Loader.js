import React from 'react'

import '../assets/styles/loader.css'

export default (props) => {
    const {LoadingBarText, color} = props
    return(
        <div className="loader-container">
            <h2>TaskMaster</h2>
            <div className="mini-task-container">
                <div className="mini-column">
                    <div className="mini-title t1"></div>
                    <div className="mini-card c1"></div>
                    <div className="mini-card c2"></div>
                    <div className="mini-card c3"></div>
                </div>
                <div className="mini-column">
                    <div className="mini-title t2"></div>
                    <div className="mini-card c4"></div>
                    <div className="mini-card c5"></div>
                    <div className="mini-card c6"></div>
                </div>
                <div className="mini-column">
                    <div className="mini-title t3"></div>
                    <div className="mini-card c7"></div>
                    <div className="mini-card c8"></div>
                    <div className="mini-card c9"></div>
                </div>
                <div className="mini-column">
                    <div className="mini-title t4"></div>
                    <div className="mini-card c10"></div>
                    <div className="mini-card c11"></div>
                    <div className="mini-card c12"></div>
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