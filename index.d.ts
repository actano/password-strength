declare module "@rplan/password-strength" {
  export default function checkPassword(password: string): boolean
  export function checkInputLength(type: string, input: string): boolean
  export const InputType: {
    Email: string,
    Password: string
  }
}
