# Lab 10.2 — Deployment with Vercel

Student Name: YOUR NAME  
Student ID: YOUR ID  
Date: YOUR DATE

## Description

This project is a React Todo application configured for production deployment.

## Production build

The Vite configuration includes:

- outDir: dist
- disabled source maps
- minification with terser
- vendor chunk splitting
- development server on port 3000

## Environment variables

The project uses:

```env
VITE_API_URL=https://api.example.com
VITE_APP_VERSION=1.0.0