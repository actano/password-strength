import { expect } from "chai"

import checkInputLength from "../src/check-input-length"
import { InputType } from "../src/types"

describe("check input length", () => {
  context("check email length", () => {
    it("should return true", () => {
      const validEmail = "john.doe@allex.ai"
      expect(checkInputLength(InputType.Email, validEmail)).to.equal(true)
    })
    it("should return false", () => {
      const invalidEmail =
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv" // 256 characters
      expect(checkInputLength(InputType.Email, invalidEmail)).to.equal(false)
    })
  })

  context("check password length", () => {
    it("should return true", () => {
      const validPassword = "Password123!@#"
      expect(checkInputLength(InputType.Password, validPassword)).to.equal(true)
    })
    it("should return false", () => {
      const invalidPassword =
        "Password123!@#Password123!@#Password123!@#Password123!@#Password1" // 65 characters
      expect(checkInputLength(InputType.Password, invalidPassword)).to.equal(false)
    })
  })
})
