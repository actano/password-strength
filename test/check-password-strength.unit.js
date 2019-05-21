import { expect } from 'chai'

import checkPasswordStrength from '../src/check-password-strength'

describe('check password strength', () => {
  context('password fulfilling all requirements', () => {
    it('should return true', () => {
      const validPassword = 'abcDEF789'
      expect(checkPasswordStrength(validPassword)).to.equal(true)
    })
  })

  context('password too short', () => {
    it('should return false', () => {
      const invalidPassword = 'abcDEF7'
      expect(checkPasswordStrength(invalidPassword)).to.equal(false)
    })
  })

  context('password does not have lowercase letters', () => {
    it('should return false', () => {
      const invalidPassword = 'ABCDEF78'
      expect(checkPasswordStrength(invalidPassword)).to.equal(false)
    })
  })

  context('password does not have uppercase letters', () => {
    it('should return false', () => {
      const invalidPassword = 'abcdef78'
      expect(checkPasswordStrength(invalidPassword)).to.equal(false)
    })
  })
})
