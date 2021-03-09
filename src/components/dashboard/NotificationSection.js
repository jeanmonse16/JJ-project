import React from 'react'

const NotificationSection = (props) =>{
    const {notificationTitle, notificationDescriptionText, notificationIcon} = props
    return(
        <div className="notification-section">
            <div className="notification-view">
                <i className={notificationIcon}></i>
            </div>
            <div className="notification-description">
                <p className="title">{notificationTitle}</p>
                <p className="description-text">{notificationDescriptionText}</p>
            </div>
        </div>
    )
}

export default NotificationSection