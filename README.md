
![Allex](https://img.shields.io/badge/Allex-7495FE?style=for-the-badge)
![Responsible: #A-Team](https://img.shields.io/badge/Responsible-%23A--Team-ffd700?style=for-the-badge)
![Repo Status](https://img.shields.io/badge/Repo%20Status-active-brightgreen?style=for-the-badge)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-View%20Workflow-blue?style=for-the-badge)](https://github.com/actano/password-strength/actions)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> Responsible: #A-Team
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
