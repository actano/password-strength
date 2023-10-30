import { InputType } from "./types"

const checkInputLength = (type, input) => {
  switch (type) {
    case InputType.Email:
      return input.length <= 255

    case InputType.Password:
      return input.length <= 64

    default:
      return true
  }
}

export default checkInputLength
