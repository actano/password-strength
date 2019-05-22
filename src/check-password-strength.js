const MINIMAL_LENGTH = 8
const NUMBERS = /\d/

const checkPasswordStrength = (password) => {
  const hasMinimalLength = password.length >= MINIMAL_LENGTH
  const hasNumber = NUMBERS.test(password)

  return hasMinimalLength && hasNumber
}

export default checkPasswordStrength
