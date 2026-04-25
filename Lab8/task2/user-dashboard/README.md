# Lab 8.2 — SSR User Dashboard

Student Name: Nurkhaidarov Beksultan
Student ID: 250752
Date: 25.04.2026

## Description

This project demonstrates Server-Side Rendering for user-specific content.

## Pages

- / — home page
- /dashboard — SSR dashboard using getServerSideProps
- /about — SSG page using getStaticProps
- /about-ssr — SSR page using getServerSideProps

## SSR vs SSG Performance Comparison

### SSG

The /about page uses Static Site Generation. It is generated at build time and served as static HTML. It is usually faster because the server does not need to regenerate HTML on every request.

### SSR

The /about-ssr page uses Server-Side Rendering. It is generated on every request. This provides fresh data, but it creates more server load.

### Dashboard

The /dashboard page uses SSR because it shows user-specific data, notifications, analytics, and current time. This data should be fresh on every request.

## How to run

```bash
npm install
npm run dev