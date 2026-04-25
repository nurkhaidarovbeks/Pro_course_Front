# Project 2 Step 5 — Styling & Responsive Layouts

Student Name: Nurkhaidarov Beksultan  
Student ID: 250752
Date: 26.04.2026

## Description

This project demonstrates responsive styling in React Native using Expo, TypeScript, StyleSheet, Flexbox, Safe Area handling, and useWindowDimensions.

## Implemented Components

### GridLayout

GridLayout.tsx implements a responsive grid system using Flexbox. It calculates item width based on the current screen width and number of columns.

### ResponsiveHeader

ResponsiveHeader.tsx implements a safe area aware header. It uses:

- SafeAreaView
- useSafeAreaInsets
- useWindowDimensions
- Platform-specific status bar handling

### AdaptiveLayout

AdaptiveLayout.tsx changes layout depending on device width:

- Phone: single-column layout
- Tablet: multi-column layout
- Landscape: adaptive layout behavior

It also includes:

- FeatureCard
- StatsRow
- ResponsiveImage

## React Native Styling

React Native uses StyleSheet.create() instead of CSS files. Layouts are built using Flexbox properties such as:

- flex
- flexDirection
- justifyContent
- alignItems
- flexWrap

## Responsive Design

The app uses useWindowDimensions() to detect screen width and height. This allows the UI to adapt to phones, tablets, portrait mode, and landscape mode.

## Safe Area Handling

The app uses react-native-safe-area-context to handle notches, status bars, and bottom safe areas.

## How to run

```bash
npm install
npx expo start