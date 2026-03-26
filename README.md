# Student Café

A modern, fast, and fully responsive website for **Student Café**, built with **React**, **Vite**, and **Tailwind CSS**.

## Features
- **Beautiful UI**: Modern aesthetics with smooth animations and transitions using internal CSS keyframes and global styles.
- **Component-Driven Architecture**: Clean, scalable folder structure separating atoms, features, hooks, and constants.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewing.
- **No External UI Libraries**: Custom-built UI components utilizing Tailwind classes and styled-inline variables.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ISHANT-KB/Student-Cafe.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Student-cafe
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server, run:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Building for Production

To create an optimized production build, run:
```bash
npm run build
```

This will output the compiled assets to the `dist` folder.

## Folder Structure
```
src/
├── components/   # Modular React components organized by feature
├── hooks/        # Custom React hooks (useInView, useScrollProgress, etc)
├── data/         # Constants, menus, and text data
├── pages/        # Page-level components
├── App.jsx       # Root App component
└── main.jsx      # React entry point
```

## Technologies Used
- React 19
- Vite
- Tailwind CSS

## Author
[ISHANT-KB](https://github.com/ISHANT-KB)
