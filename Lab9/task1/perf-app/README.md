# Lab 9.1 — Memoization with React.memo, useMemo, useCallback

Student Name: Nurkhaidarov Beksultan 
Student ID: 250752
Date: 25.04.2026

## Description

This project demonstrates React performance optimization techniques:

- React.memo
- useMemo
- useCallback

## React.memo

React.memo memoizes a component. It prevents unnecessary re-renders when props do not change.

In this project, UserCard uses React.memo. When the parent Dashboard count changes, UserCard does not re-render because its user prop stays the same.

## useMemo

useMemo memoizes a calculated value.

In this project, AnalyticsChart uses useMemo to avoid running an expensive calculation on every parent render.

## useCallback

useCallback memoizes a function reference.

In this project, Button is memoized and receives callbacks from ParentComponent. useCallback prevents new function references from being created on every render.

## How to run

```bash
npm install
npm run dev