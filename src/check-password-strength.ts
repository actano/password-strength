const passwordRegex = /^(?=.*[\^!"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`{\|}~].*[\^!"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`{\|}~])(?=.*[0-9])(?=.*\w.*\w).{10,30}$/

const checkPasswordStrength = (password: string): boolean => passwordRegex.test(password)

export default checkPasswordStrength
