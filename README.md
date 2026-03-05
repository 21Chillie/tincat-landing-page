# TinCat Landing Page Template

Tincat is a fun and responsive landing page inspired by Tinder, but for cats.
A customizable landing page template built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [TinCat Landing Page Template](#tincat-landing-page-template)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Run in development](#run-in-development)
    - [Build for production](#build-for-production)
    - [Preview production build](#preview-production-build)
  - [Project Structure](#project-structure)
  - [How Customization Works](#how-customization-works)
  - [Theme and Color Customization](#theme-and-color-customization)
  - [What Not to Change](#what-not-to-change)

## Overview

TinCat Landing Page Template provides a ready-made single-page marketing site with sections for:

- Hero
- Sponsor logos
- Features
- Testimonials
- Pricing
- FAQ
- Footer

All user-facing text and most section data are managed from the `src/content` folder.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- DaisyUI
- React Icons

## Getting Started

### Prerequisites

Bun (or Node.js, if you prefer)

### Install

```bash
bun install
```

### Run in development

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

## Project Structure

```text
src/
  components/      # UI sections and layout
  content/         # Main editable content source
  assets/          # Images and fonts
  styles/          # Global styles
public/            # Static files (favicon, robots, sitemap)
```

## How Customization Works

This template is intentionally simple:

- Update copy, labels, links, and section data in `src/content/*`
- Change visual theme via `src/content/setTheme.ts`
- Replace image imports with your own assets when needed

Recommended workflow:

1. Edit one content file at a time
2. Check the page in `npm run dev`
3. Keep data shapes and required keys unchanged

> For detailed customization instructions, see [HOWTO.md](./HOWTO.md).

## Theme and Color Customization

Primary way:

- Set a theme in `src/content/setTheme.ts`

Optional deeper control:

- Adjust utility classes in section components (for example `text-*`, `bg-*`, `btn-*`)
- Update global styles in `src/styles/index.css`

## What Not to Change

To keep this template stable, avoid changing:

- Object key names in `src/content/*` unless you also update component code
- Export names consumed by components
- Type definitions without updating all related usages
- Component import paths to content files unless intentional refactor
