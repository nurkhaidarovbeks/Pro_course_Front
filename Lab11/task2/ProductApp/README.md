# Lab 11.2 — Lists, Navigation, and Platform-Specific Code

Student Name: Nurkhaidarov Beksultan  
Student ID: 250752
Date: 26.04.2026

## Description

This project is a React Native product catalog built with Expo and TypeScript.

## Features

- Product list screen
- Product detail screen
- React Navigation stack navigator
- FlatList for efficient list rendering
- Pull-to-refresh
- Platform-specific styling using Platform.select

## Components and Screens

- ProductItem.tsx — displays one product item
- ProductListScreen.tsx — displays products using FlatList
- ProductDetailScreen.tsx — displays selected product details
- products.ts — product data

## Navigation

The app uses:

- NavigationContainer
- createNativeStackNavigator
- Stack.Screen

The product list screen navigates to the detail screen and passes the selected product as a route parameter.

## React Native list rendering

React web often uses map() to render lists. React Native should use FlatList for better performance with larger lists.

## Platform-specific code

The product detail screen uses Platform.OS and Platform.select() to apply different behavior or styling on iOS and Android.

## How to run

```bash
npm install
npx expo start