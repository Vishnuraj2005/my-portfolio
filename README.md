# Portfolio Website Setup Guide

This is a complete MERN stack portfolio website featuring modern animations and a fully functional contact form.

## Prerequisites
- Node.js installed
- MongoDB installed and running locally

## Project Structure
- `client/`: React Frontend (Vite)
- `server/`: Express Backend

## Setup & Running

### 1. Backend Setup
The backend runs on port 5000 and connects to MongoDB.

```bash
cd server
npm install
# Create a .env file with:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/portfolio

npm run dev
```

### 2. Frontend Setup
The frontend runs on port 5173 (default Vite port) and proxies requests to the backend.

```bash
cd client
npm install
npm run dev
```

### 3. Verification
- Open your browser at `http://localhost:5173`.
- Navigate through all sections.
- Try sending a message through the Contact form.
- Check the `server` console for "MongoDB Connected".

## Features
- **Hero Section**: GSAP animations and 3D-like visuals.
- **About**: Scroll reveal text animations using Framer Motion.
- **Skills**: 3D hover effects on skill cards.
- **Projects**: Interactive cards with links.
- **Contact**: Full stack integration with MongoDB storage.
