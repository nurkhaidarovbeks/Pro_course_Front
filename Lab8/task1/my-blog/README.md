# Lab 8.1 — Next.js Blog with SSR and SSG

Student Name: Nurkhaidarov Beksultan 
Student ID: 250752
Date: 25.04.2026

## Description

This project is a blog application built with Next.js, TypeScript, Pages Router, SSG, dynamic SSG routes, and ISR.

## Pages

- / — home page using getStaticProps
- /posts/[id] — dynamic blog post page using getStaticPaths and getStaticProps
- /about — static about page using getStaticProps

## SSR vs SSG vs ISR

SSG means Static Site Generation. The HTML is generated at build time. It is very fast and works well for blog posts, documentation, and public pages.

SSR means Server-Side Rendering. The HTML is generated on every request. It is useful for personalized or frequently changing data.

ISR means Incremental Static Regeneration. It allows static pages to be updated after a time interval. In this project, revalidate: 60 means that the page can be regenerated every 60 seconds.

## How to run

```bash
npm install
npm run dev