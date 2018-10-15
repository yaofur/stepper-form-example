# Stepper-Form-Example

## before all

1. `npm install`
2. `npm run start` or `npm start`
3. run test `npm run test` or 'npm t'


## Overview

![oct-15-2018 22-48-46](https://user-images.githubusercontent.com/289392/46977439-8d759800-d0cc-11e8-9156-82348a0442b2.gif)

TypeScript + React + Formik

---

## build tools

[ParcelJS](https://parceljs.org/)

## State Manager

It's basicly a form component, so I use [formik](https://jaredpalmer.com/formik/) to manager it's state. Also use [yup](https://github.com/jquense/yup) to do form validation. And the *step* state is manager by formik's *status*.

In real world application, I may choose [rematch](https://rematch.gitbooks.io/rematch/) or Redux as state manager.

## CSS Solution

[Styled-Components](https://www.styled-components.com/)

There's a lot of CSS solution out there, it's hard to tell which one is better. Personal I prefer *CSS-Module* or *StyledComponents* or *styled-jsx*(only when using next.js).

## Test

Use jest and enzyme for test, `__tests__/app.tsx`, only write some basic test for the app flow.
