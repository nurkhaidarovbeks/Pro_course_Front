# Lab 14.1 — Performant Infinite List with FlatList

Student Name: Nurkhaidarov Beksulltan  
Student ID: 250752 
Date: 26.04.2026

## Description

This project implements a performant contacts directory using React Native FlatList.

## Features

- 1000 generated mock contacts
- FlatList virtualization
- Stable keyExtractor
- Optimized renderItem with useCallback
- getItemLayout for fixed item height
- Item separator
- List header
- Empty state
- Pull-to-refresh with RefreshControl

## Why FlatList?

FlatList is better than ScrollView for large lists because it only renders visible items. This reduces memory usage and improves scroll performance.

## Performance Optimizations

The app uses:

- initialNumToRender
- maxToRenderPerBatch
- windowSize
- removeClippedSubviews
- getItemLayout
- useCallback

## How to run

```bash
npm install
npx expo start