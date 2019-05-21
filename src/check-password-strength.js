const MINIMAL_LENGTH = 8
const NUMBERS = /\d/
const UPPERCASE = /[A-Z]/
const LOWERCASE = /[a-z]/

const checkPasswordStrength = (password) => {
  const hasMinimalLength = password.length >= MINIMAL_LENGTH
  const hasNumber = NUMBERS.test(password)
  const hasUpperCase = UPPERCASE.test(password)
  const hasLowerCase = LOWERCASE.test(password)

  return hasMinimalLength && hasNumber && hasUpperCase && hasLowerCase
}

export default checkPasswordStrength
