# Password strength
A set of rules to check the strength of a password.

## Rules for strong password
* minimum length of 8 characters
* at least one number

## How to use it
```
yarn add @rplan/password-strength
```
It returns true if the password fulfills the required rules or false if it violates one or more rules.
```
import checkPasswordStrength from '@rplan/password-strength'

const weakPassword = 'password'
checkPasswordStrength(password) // returns false

const strongPassword = 'SomeStrongPasswordWithNumbers123'
checkPasswordStrength(strongPassword) // returns true
```
