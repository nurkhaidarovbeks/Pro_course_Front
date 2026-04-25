# Lab 13.1 — Stack Navigation

Student Name: Nurkhaidarov Beksultan  
Student ID: 250752
Date: 26.04.2026

## Description

This project demonstrates stack navigation in React Native using Expo and React Navigation.

## Screens

- HomeScreen
- ProfileScreen
- SettingsScreen

## Navigation

The app uses:

- NavigationContainer
- createNativeStackNavigator
- Stack.Navigator
- Stack.Screen

## Route Parameters

The Home screen navigates to Profile and passes a userId:

```ts
navigation.navigate("Profile", { userId: "123" });