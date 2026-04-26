# Lab 14.2 — Registration Flow and Form Validation

Student Name: Nurkhaidarov Beksultan
Student ID: 250752 
Date: 26.04.2026

## Description

This project implements a React Native registration form with keyboard handling and validation.

## Features

- Full name input
- ALMAU email input
- Password input
- Real-time email validation
- Password length validation
- Disabled submit button when the form is invalid
- KeyboardAvoidingView
- TouchableWithoutFeedback for dismissing keyboard
- Platform-specific keyboard behavior

## Keyboard Handling

The app uses KeyboardAvoidingView to prevent the keyboard from covering inputs.

On iOS, it uses:

```tsx
behavior="padding"