import { expect } from 'chai'

import checkPasswordStrength from '../src/check-password-strength'

const allowedSpecialCharacters = '^!"#$%&\'()*+,-.:;<=>?@[\\]^_`{|}~';

describe('check password strength', () => {
  context('password fulfilling all requirements', () => {
    it('should return true', () => {
      const validPassword = 'abcDEF$#789'
      expect(checkPasswordStrength(validPassword)).to.equal(true)
    })
    allowedSpecialCharacters.split('').forEach((chr) => {
      it(`should return true with ${chr} special characters`, () => {
        const validPassword = `abcDEF\$789${chr}`
        expect(checkPasswordStrength(validPassword)).to.equal(true)
      })
    })
  })

  context('password too short', () => {
    it('should return false', () => {
      const invalidPassword = 'abcDEF7'
      expect(checkPasswordStrength(invalidPassword)).to.equal(false)
    })
  })

  context('password without numbers', () => {
    it('should return false', () => {
      const invalidPassword = 'abcDEFgh'
      expect(checkPasswordStrength(invalidPassword)).to.equal(false)
    })
  })

  context('password without special characters', () => {
    it('should return false', () => {
      const invalidPassword = 'abcDEFgh456'
      expect(checkPasswordStrength(invalidPassword)).to.equal(false)
    })
  })
})
