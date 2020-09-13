import React from 'react'

import logotype from '../../images/logo.png'

const Top = (props) =>{
    const {username} = props
    return(
        <div className="dashboard-top-container">
            <div className="dashboard-top-center">
                <div className="section">
                    <div className='hamburger-menu'>
                        <div className='hamburger' id='hamburger-9'>
                            <span className='line' />
                            <span className='line' />
                            <span className='line' />
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="logo"><img src={logotype}/></div>
                </div>
                <div className="section">
                    <div className="right-menu">
                        <label>{username}</label>
                            <div className="notification-button">
                                <button>1</button>
                                <i className="notification-button-icon far fa-bell"></i>
                            </div>
                        <i className="exit-button far fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top