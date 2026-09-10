# Laura Simion — Frontend Engineer Portfolio

> **Interfaces that feel simple. Engineering that isn’t.**

Personal portfolio website showcasing my experience, projects, technical skills, and approach to building modern frontend applications.

## 🌗 Theme System

The portfolio supports both dark and light themes.

The selected theme is persisted using `localStorage`, allowing the user's preference to remain consistent between visits.

The design uses different palettes for each mode while maintaining the same visual identity.

## ✉️ Contact

The contact form is handled through a server-side API route rather than exposing email-related credentials in the browser.

Basic spam protection is also implemented to prevent the endpoint from being abused.

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Animations and interactive elements are adapted where necessary to keep the experience usable on smaller devices.

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## 📦 Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## 📄 License

This project is a personal portfolio and is not intended to be used as a template or redistributed without permission.
