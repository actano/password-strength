import { InputType } from './types'

const checkInputLength = (type: InputType, input: string): boolean => {
  switch (type) {
    case InputType.Email:
      return input.length <= 255

    case InputType.Password:
      return input.length <= 64

    default:
      throw new Error('Wrong input type')
  }
}

export default checkInputLength
