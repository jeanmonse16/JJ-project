import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ValidateOne, ValidateMany } from '../../_utils/Validator'
import md5 from 'md5'
import ButtonGroup from '../ButtonGroup'
import { getFromFilenamePath } from '../../_utils/FileUtilities'
import GenerateRandomNumber from '../../_utils/GenerateRandomNumber'
import PasswordSecurityLevel from '../../_utils/PasswordSecurityLevel'
import { getRandomItems as getRandomItemsRequest, updateUserData as updateUserDataRequest } from '../../_services'
import Swal from 'sweetalert2'

import { Loader } from '../../_utils/Loader'

import UserImg from '../../assets/images/user-profile.jpg'

const ProfileModal = (props) => {
  const { userPhoto, username, userEmail, userPassword, userTasks, socialMediaUser, userAlias } = props
  const [editProfileMode, setEditProfileMode] = useState(false)
  const [userActivities, setUserActivities] = useState(() => {
    const today = Date.now()
    return {
      scheduled: userTasks.filter(task => new Date(task.expires_at).getTime() >= today).length,
      completed: userTasks.filter(task => new Date(task.expires_at).getTime() < today).length
    }
  })

  const [editModeUser, setEditModeUser] = useState({
    userPhoto: userPhoto,
    userPhotoFile: null,
    gravatarAsPhoto: false,
    username: username,
    currentPassword: '',
    newPassword: '',
    confirmedNewPassword: ''
  })
  const [randomUsernames, setRandomUsernames] = useState([])
  const handleUserEditionChange = e => {
    setEditModeUser({
      ...editModeUser,
      [e.target.name]: e.target.value
    })
  }
  const emailHash = md5(userEmail)
  const gravatars = [
    `${ENV.GRAVATAR_API}${emailHash}?d=identicon`,
    `${ENV.GRAVATAR_API}${emailHash}?d=monsterid`,
    `${ENV.GRAVATAR_API}${emailHash}?d=wavatar`,
    `${ENV.GRAVATAR_API}${emailHash}?d=retro`,
    `${ENV.GRAVATAR_API}${emailHash}?d=robohash`
  ]

  const imageReader = (file) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = e => {
      setEditModeUser({
        ...editModeUser,
        userPhoto: e.target.result,
        userPhotoFile: file,
        gravatarAsPhoto: false
      })
    }
  }

  const setProfileImageAsRandomGravatar = () => {
    setEditModeUser({
      ...editModeUser,
      userPhoto: gravatars[GenerateRandomNumber(0, 4)],
      userPhotoFile: null,
      gravatarAsPhoto: true
    })
  }

  const setRandomUsername = () => {
    setEditModeUser({
      ...editModeUser,
      username: randomUsernames[GenerateRandomNumber(0, randomUsernames.length - 1)]
    })
  }

  const preventDefaults = e => {
    e.preventDefault() // Evita que el browser abra el archivo dropeado
    e.stopPropagation()
  }

  const handleImageUpload = e => {
    preventDefaults(e)
    imageReader(e.target.files['0'])
  }

  const [userUpdateLoader, setUserUpdateLoader] = useState(Loader())
  const [isLoadingUserUpdate, setIsLoadingUserUpdate] = useState(userUpdateLoader.isLoading())

  const [currentPasswordInputType, setCurrentPasswordInputType] = useState('password')
  const handleEyeClick = () => {
    if (currentPasswordInputType === 'password') {
      setCurrentPasswordInputType('text')
    } else {
      setCurrentPasswordInputType('password')
    }
  }

  const handleUserUpdate = () => {
    userUpdateLoader.loading()
    setIsLoadingUserUpdate(userUpdateLoader.isLoading())
    const formData = new FormData()
    formData.append('alias', userAlias)
    if (username !== editModeUser.username) {
      formData.append('username', editModeUser.username)
    }
    if (editModeUser.newPassword && editModeUser.confirmedNewPassword && editModeUser.currentPassword && !socialMediaUser) {
      const wrongData = ValidateMany([{ value: editModeUser.newPassword, type: 'password' }, { value: editModeUser.confirmedNewPassword, type: 'password' }])
        .filter(result => result !== 'succesfully Validated')

      if (wrongData.length) {
        console.error(wrongData[0])
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: wrongData[0]
        })
      } else if (editModeUser.newPassword !== editModeUser.confirmedNewPassword) {
        console.error('Las contraseñas no coinciden')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden'
        })
      } else {
        formData.append('currentPassword', editModeUser.currentPassword)
        formData.append('newPassword', editModeUser.newPassword)
      }
    }
    if (editModeUser.userPhotoFile) {
      formData.append('file', editModeUser.userPhotoFile)
    }

    if (editModeUser.gravatarAsPhoto) {
      formData.append('profileImage', editModeUser.userPhoto)
    }

    updateUserDataRequest(props.token, formData)
      .then(() => {
        props.onSave(0)
      })
      .catch(() => {
        props.onSave(0)
      })
      .finally(() => {
        userUpdateLoader.loaded()
        setIsLoadingUserUpdate(userUpdateLoader.isLoading())
      })
  }

  useEffect(() => {
    getRandomItemsRequest()
      .then(response => {
        setRandomUsernames(
          response.data.results.map(profile => profile.login.username)
        )
      })
  }, [])
  return (
    <div className='profile-modal'>
      <div className='profile-modal-body'>
        <div onClick={props.close}>
          <i className='profile-modal-exit-icon far fa-times' />
        </div>
        {
          !editProfileMode
            ? <div className='view-profile'>
              <h2>PERFIL DE TASKMASTER</h2>
              <img src={userPhoto || UserImg} />
              <label className='username'>{username}</label>
              <div className='acount-information'>
                <p>CORREO ELECTRÓNICO:</p>
                <div className='profile-section'>
                  <label>{userEmail}</label>
                  <div className='verify-email'>
                    <label className='vefify-text'>verificado</label>
                    <i className='verify-icon far fa-check' />
                  </div>
                </div>
                <hr />
                <p>ACTIVIDADES AGENDADAS:</p>
                <label>{userActivities.scheduled}</label>
                <hr />
                <p>ACTIVIDADES COMPLETADAS:</p>
                <label>{userActivities.completed}</label>
                {
                  !socialMediaUser &&
                    <>
                      <hr />
                      <p>CONTRASEÑA:</p>
                      <div className='profile-section'>
                        <label>********</label>
                        <div className='password-security-level'>
                          <label className='low-level' style={{ color: PasswordSecurityLevel('TopsIn45686') < 33 ? 'gray' : '' }}>baja</label>
                          <label className='medium-level' style={{ color: PasswordSecurityLevel('TopsIn45686') > 33 && PasswordSecurityLevel(userPassword) < 66 ? 'gray' : '' }}>media</label>
                          <label className='high-level' style={{ color: PasswordSecurityLevel('TopsIn45686') > 66 ? 'gray' : '' }}>alta</label>
                        </div>
                      </div>
                    </>
                }
                <hr />
              </div>
              <ButtonGroup
                buttonText='EDITAR' handleClick={() => setEditProfileMode(true)}
              />
            </div>
            : <div className='edit-profile'>
              <h2>EDITAR PERFIL DE TASKMASTER</h2>
              <div className='profile-image-container'>
                <div className='profile-image'>
                  <div className='upload-image-icon-container' onDrop={handleImageUpload} onDragOver={preventDefaults}>
                    <i className='upload-image-icon far fa-upload' />
                  </div>
                  <input type='file' accept='image/*' onChange={handleImageUpload} />
                  <img src={editModeUser.userPhoto || UserImg} />
                </div>
                <div className='random-image-container' onClick={setProfileImageAsRandomGravatar}>
                  <i className='random-image-icon far fa-dice' />
                </div>
              </div>
              <div className='username-container'>
                <input type='text' name='username' value={editModeUser.username} onInput={handleUserEditionChange} />
                <div className='random-username-container' onClick={setRandomUsername}>
                  <i className='random-image-icon far fa-dice' />
                </div>
              </div>
              {!socialMediaUser &&
                <>
                  <p>CAMBIAR CONTRASEÑA</p>
                  <div className='change-password-container'>
                    <p>ACTUAL CONTRASEÑA:</p>
                    <div className='password-input-container'>
                      <div onClick={handleEyeClick} style={{ marginBottom: '15px' }}><i className='view-password-icon far fa-eye' /></div>
                      <input type={currentPasswordInputType} name='currentPassword' onInput={handleUserEditionChange} />
                    </div>
                    <p>NUEVA CONTRASEÑA:</p>
                    <div className='password-input-container'>
                      <div className='password-security-level'>
                        <label className='low-level' style={{ color: PasswordSecurityLevel(editModeUser.newPassword) < 33 ? '' : 'gray' }}>baja</label>
                        <label className='medium-level' style={{ color: (PasswordSecurityLevel(editModeUser.newPassword) > 33 && PasswordSecurityLevel(editModeUser.newPassword) < 66) ? '' : 'gray' }}>media</label>
                        <label className='high-level' style={{ color: PasswordSecurityLevel(editModeUser.newPassword) > 66 ? '' : 'gray' }}>alta</label>
                      </div>
                      <input type='password' className='new-password-input' name='newPassword' onInput={handleUserEditionChange} />
                    </div>
                    <p>CONFIRMAR NUEVA CONTRASEÑA:</p>
                    <div className='password-input-container'>
                      <input type='password' name='confirmedNewPassword' onInput={handleUserEditionChange} />
                    </div>
                  </div>
                </>}
              <div className='edit-profile-buttom'>
                <ButtonGroup
                  buttonText='DESCARTAR' handleClick={() => setEditProfileMode(false)}
                />
                <ButtonGroup
                  buttonText='GUARDAR' handleClick={handleUserUpdate} loading={isLoadingUserUpdate}
                />
              </div>
            </div>
        }
      </div>
    </div>

  )
}

const mapStateToProps = state => ({
  userAlias: state.userData.alias,
  userPhoto: state.userData.profileImage,
  username: state.userData.username,
  userEmail: state.userData.email,
  userTasks: state.userData.tasks,
  userPassword: state.userData.password || '*******',
  socialMediaUser: state.userData.socialMediaUser,
  token: state.token
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal)
