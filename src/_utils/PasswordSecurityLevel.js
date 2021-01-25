function hasNumbers (string) {
  const NUMBERS = '0123456789'
  for (let i = 0; i < string.length; i++) {
    if (NUMBERS.indexOf(string.charAt(i), 0) !== -1) {
      return 1
    }
  }
  return 0
}

const LETTERS = 'abcdefghyjklmnñopqrstuvwxyz'

function hasLetters (string) {
  string = string.toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (LETTERS.indexOf(string.charAt(i), 0) !== -1) {
      return 1
    }
  }
  return 0
}

function hasLowerCaseLetters (string) {
  for (let i = 0; i < string.length; i++) {
    if (LETTERS.indexOf(string.charAt(i), 0) != -1) {
      return 1
    }
  }
  return 0
}

function hasUpperCaseLetters (string) {
  for (let i = 0; i < string.length; i++) {
    if (LETTERS.toUpperCase().indexOf(string.charAt(i), 0) != -1) {
      return 1
    }
  }
  return 0
}

export default (password) => {
  let security = 0
  if (password.length !== 0) {
    if (hasNumbers(password) && hasLetters(password)) {
      security += 30
    }
    if (hasLowerCaseLetters(password) && hasUpperCaseLetters(password)) {
      security += 30
    }
    if (password.length >= 4 && password.length <= 5) {
      security += 10
    } else {
      if (password.length >= 6 && password.length <= 8) {
        security += 30
      } else {
        if (password.length > 8) {
          security += 40
        }
      }
    }
  }
  return security
}
