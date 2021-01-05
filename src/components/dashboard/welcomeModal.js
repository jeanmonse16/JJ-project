import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import md5 from 'md5'
import ButtonGroup from '../ButtonGroup'
import GenerateRandomNumber from '../../_utils/GenerateRandomNumber'
import { getRandomItems as getRandomItemsRequest, updateUserData as updateUserDataRequest } from '../../_services/user_service'
import { Loader } from '../../_utils/Loader'

import UploadImg from '../../assets/images/profile-image.png'

const welcomeModal = ({ userData, token, onSave }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    profileImage: userData.profileImage,
    uploadedImageFile: null
  })
  const [randomUsernames, setRandomUsernames] = useState([])
  const saveButtonLoader = Loader()
  const [isLoadingSaveAction, setIsLoadingSaveAction] = useState(saveButtonLoader.isLoading())

  const emailHash = md5(userData.email)
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
      setUserInfo({
        ...userInfo,
        profileImage: e.target.result,
        uploadedImageFile: file
      })
    }
  }

  const setProfileImageAsRandomGravatar = () => {
    setUserInfo({
      ...userInfo,
      profileImage: gravatars[GenerateRandomNumber(0, 4)],
      uploadedImageFile: null
    })
  }

  const setRandomUsername = () => {
    setUserInfo({
      ...userInfo,
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

  const handleInputChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    saveButtonLoader.loading()
    setIsLoadingSaveAction(saveButtonLoader.isLoading())
    const formData = new FormData()
    formData.append('username', userInfo.username)
    formData.append('alias', userData.alias)
    if (userInfo.profileImage) {
      userInfo.uploadedImageFile
        ? formData.append('file', userInfo.uploadedImageFile)
        : formData.append('profileImage', userInfo.profileImage)
    }

    updateUserDataRequest(token, formData)
      .then(response => {
        onSave(2)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        saveButtonLoader.loaded()
        setIsLoadingSaveAction(saveButtonLoader.isLoading())
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
    <div className='welcome-modal'>
      <div className='welcome-modal-body'>
        <h2>TE DAMOS LA BIENVENIDA</h2>
        <p> Añade un nombre de usuario {!userData.profileImage && 'y una foto de perfil'} </p>
        {
          !userData.profileImage &&
            <div className='new-profile-image-container'>
              <div className='new-profile-image'>
                <div className='upload-image-icon-container' onDrop={handleImageUpload} onDragOver={preventDefaults}>
                  <i className='upload-image-icon far fa-upload' />
                </div>
                <input type='file' accept='image/*' onChange={handleImageUpload} />
                <img src={userInfo.profileImage || UploadImg} />
              </div>
              <div onClick={setProfileImageAsRandomGravatar}>
                <i className='random-image-icon far fa-dice' />
              </div>
            </div>
        }
        <div className='new-username-container'>
          <input name='username' className='new-username' type='text' placeholder='NOMBRE DE USUARIO' onInput={handleInputChange} onChange={handleInputChange} value={userInfo.username} />
          <div onClick={setRandomUsername}>
            <i className='random-usename-icon far fa-dice' />
          </div>
        </div>
        <ButtonGroup
          buttonText='GUARDAR' handleClick={handleSubmit} canSubmit={!!(userInfo.username && userInfo.profileImage)} loading={isLoadingSaveAction}
        />
      </div>
    </div>
  )
}

{
  /*
  import InputGroup from '../InputGroup'

import UploadImg from '../../assets/images/profile-image.png'

const WelcomeModal = () =>{
    return(
        <div className="welcome-modal">
            <div className="welcome-modal-body">
                <h2>BIENVENIDO A TASKMASTER</h2>
                <p>Añade un nombre de usuario y una foto de perfil</p>
                <div className="new-profile-image-container">
                    <div className="new-profile-image">
                        <div className="upload-image-icon-container">
                            <i className="upload-image-icon far fa-upload"></i>
                        </div>
                        <input type="file"/>
                        <img src={UploadImg}/>
                    </div>
                    <div className="random-image-container">
                        <i className="random-image-icon far fa-dice"></i>
                    </div>
                </div>
                <div className="new-username-container">
                    <InputGroup inputType="text" inputPlaceHolder="NOMBRE DE USUARIO"/>
                    <div className="random-username-container">
                        <i className="random-image-icon far fa-dice"></i>
                    </div>
  */
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(welcomeModal)
