const passwordRegex = /^(?=.*[\^!"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`{\|}~].*[\^!"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`{\|}~])(?=.*[0-9])(?=.*\w.*\w).{10,30}$/

const checkPasswordStrength = (password) => passwordRegex.test(password)

export default checkPasswordStrength
