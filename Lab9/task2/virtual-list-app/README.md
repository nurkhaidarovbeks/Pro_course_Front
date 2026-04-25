# Lab 9.2 — Virtualization for Large Lists

Student Name: Nurkhaidarov Beksultan 
Student ID: 250752
Date: 26.04.2026

## Description

This project demonstrates list virtualization with react-window.

The app renders 10,000 mock items and compares two approaches:

- VirtualizedList
- RegularList

## Virtualized List

The virtualized list uses react-window. It only renders the visible rows in the viewport.

Benefits:

- Fewer DOM nodes
- Faster initial rendering
- Lower memory usage
- Smoother scrolling

## Regular List

The regular list uses map and renders all 10,000 items at once. This creates many DOM nodes and can reduce performance.

## Filtering

The virtualized list includes a filter input. Users can filter items by title or category.

## Performance Comparison

Regular list:

- Renders all 10,000 DOM elements
- Slower initial rendering
- Heavier scrolling

Virtualized list:

- Renders only visible rows
- Faster initial rendering
- Smoother scrolling
- Better memory usage

## How to run

```bash
npm install
npm run dev