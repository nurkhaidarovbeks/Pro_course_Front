# Lab 13.2 — Bottom Tab Navigation

Student Name: Nurkhaidarov Beksultan
Student ID: 250752 
Date: 26.04.2026

## Description

This project demonstrates bottom tab navigation in React Native using Expo and React Navigation.

## Navigation Structure

The app combines bottom tabs and stack navigators.

Tabs:

- Home
- Search
- Notifications
- Profile

Each tab contains its own stack navigator.

## Features

- Bottom Tab Navigator
- Native Stack Navigator
- Ionicons tab icons
- Notification badge
- Search screen with filtered results
- Notifications screen with unread state
- TypeScript navigation types

## Route Parameters

The profile screen receives a userId parameter:

```ts
navigation.navigate("Profile", { userId: "123" });