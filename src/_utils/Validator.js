export function ValidateMany (items) {
  return items.map(item => {
    return ValidateOne(item.value, item.type) === 1 ? 'succesfully Validated' : ValidateOne(item.value, item.type)
  })
}

export function ValidateOne (value, type) {
  if (type === 'email') {
    return textValidator(value) && emailValidator(value)
  } else if (type === 'password') {
    return passwordValidator(value)
  } else if (type === 'text') {
    return textValidator(value)
  } else if (type === 'number') {
    return textValidator(value)
  } else if (type === 'telephone') {
    return textValidator(value)
  }
}

const textValidator = (value) => value == null || value.length === 0 || /^\s+$/.test(value) ? 'No puede haber campos vacíos' : 1

const passwordValidator = (password) => {
  if (password.length >= 8) {
    let mayuscula = false
    let minuscula = false
    let numero = false
    let caracterRaro = false
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
        mayuscula = true
      } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
        minuscula = true
      } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        numero = true
      } else {
        caracterRaro = true
      }
    }
    if (mayuscula === true && minuscula === true && caracterRaro === true && numero === true) {
      return 1
    }
  }
  return 'debes ingresar una contraseña con mínimo un caracter minúsculo, mayúsculo, un número y un caracter especial'
}

const emailValidator = value => value.includes('@') && value.includes('.com') ? 1 : 'Debes ingresar un email válido'
