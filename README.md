# PORSCHE — Official Dealer Concept

> **Lviv Polytechnic — Laboratory Work #2**  
> Team university project: a modern Porsche dealer website concept built with React and modern web technologies.

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![Project](https://img.shields.io/badge/project-university%20lab%20%232-blue)
![Frontend](https://img.shields.io/badge/frontend-React-61DAFB)
![Build](https://img.shields.io/badge/build-Vite-646CFF)
![Deployment](https://img.shields.io/badge/deployed-GitHub%20Pages-222222)

---

## 01 — About the Project

**PORSCHE** is a university team project created as part of **Laboratory Work #2 at Lviv Polytechnic**.

The goal was to design and implement a professional-looking website for a **Porsche official dealer concept in Lviv**, combining visual presentation, navigation, automotive content and a responsive user interface.

This project is an **educational concept** and is not affiliated with or endorsed by Porsche AG.

### Project idea

We wanted to build more than a simple laboratory page.

The concept was to make a website that could realistically represent a premium automotive dealership:

- showcase Porsche models
- present available vehicles
- provide service information
- introduce the dealership
- provide contacts and location
- allow users to request a test drive or consultation
- maintain a premium visual style

---

## 02 — Team

### Founder / Team Lead
**Vladyslav Savchuk**

Responsible for project direction, architecture decisions, development workflow and final integration.

### Executors
**University project team**

Development, UI implementation, content preparation, testing and project presentation.

### Brainstorm

The project started from a simple question:

> **"What would a modern Porsche dealer website look like if we designed it from scratch?"**

From there, the team focused on three things:

**Brand feeling** → premium, minimal, automotive  
**User experience** → clear navigation and fast access to important information  
**Implementation** → a real React application rather than a static mockup

---

## 03 — Main Sections

The website includes the following concept sections:

| Section | Purpose |
|---|---|
| 🏎️ Models | Porsche vehicle lineup |
| 🚘 Available Cars | Cars currently presented by the dealership |
| 🔧 Service | Dealership and automotive service information |
| 🏢 About Us | Information about the dealer |
| 📞 Contacts | Phone, email and dealership information |
| 📍 Location | Dealer location in Lviv |
| 🏁 Test Drive | Contact flow for a test-drive request |

---

## 04 — Tech Stack

### Frontend

- **React**
- **TypeScript**
- **TanStack Start / TanStack Router**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **Radix UI**
- **React Hook Form**
- **Zod**

### Development

- Git
- GitHub
- GitHub Actions
- VS Code
- npm

### Deployment

The project is deployed using:

**GitHub Pages + GitHub Actions**

Every push to `main` can trigger a new deployment through the CI/CD workflow.

---

## 05 — Project Structure

```text
PorscheDealer/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── components/
│   ├── routes/
│   ├── lib/
│   └── styles/
├── vite.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

> The exact internal structure may change during development as the project evolves.

---

## 06 — Run Locally

Clone the repository:

```bash
git clone https://github.com/VladyslavSavchuk/PorscheDealer.git
cd PorscheDealer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

---

## 07 — Deployment

The project uses **GitHub Actions** for deployment.

```text
Developer
   │
   ▼
git push
   │
   ▼
GitHub
   │
   ▼
GitHub Actions
   │
   ├── Install dependencies
   ├── Build application
   ├── Prepare static output
   └── Deploy
        │
        ▼
   GitHub Pages
```

### Live Demo

**https://vladyslavsavchuk.github.io/PorscheDealer/**

---

## 08 — Academic Context

**Educational institution:**  
Lviv Polytechnic National University

**Work:**  
Laboratory Work №2

**Project type:**  
Team university assignment

**Subject:**  
Web development / frontend development

The purpose of the work was not only to produce a final webpage, but also to practice:

- teamwork
- Git and GitHub
- project structure
- frontend development
- deployment
- version control
- planning and brainstorming
- presenting a finished software product

---

## 09 — Development Workflow

The team followed a simple development cycle:

```text
Idea
 ↓
Brainstorm
 ↓
Design
 ↓
Implementation
 ↓
Testing
 ↓
Git commit
 ↓
GitHub
 ↓
Deployment
```

This allowed the project to be treated as a small real-world software product instead of only a classroom exercise.

---

## 10 — Team Philosophy

> **Think like engineers. Build like developers. Present like a team.**

The main objective of this laboratory project was to combine technical implementation with product thinking.

Even though this is an academic project, the final result was designed with a real-world website structure and deployment workflow in mind.

---

## 11 — Disclaimer

This repository is a **student educational project** created for academic purposes.

Porsche®, the Porsche name, logos, vehicle names and related trademarks belong to their respective owners.

This project is **not an official Porsche website** and is not affiliated with Porsche AG.

---

## Authors

**Lviv Polytechnic — Student Development Team**

Built for **Laboratory Work #2 · 2026**
