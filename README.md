# Project Title

**TOM**

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment Setup](#environment-setup)
  - [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
  - [Backend Running](#backend-running)
  - [Frontend Running](#frontend-running)
- [Building the Application](#building-the-application)
  - [Backend Building](#backend-building)
  - [Frontend Building](#frontend-building)
- [Running Tests](#running-tests)
  - [Backend Tests](#backend-tests)
  - [Frontend Tests](#frontend-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a full-stack application with a **backend** built using Node.js and TypeScript, and a **frontend** built using [Vue](https://vuejs.org/) with Vite. It includes authentication features and comprehensive testing using Jest.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** (version 9 or higher)
- **Git**
- **MySQL** (version 8 or higher)

## Installation

First, clone the repository:

```bash
git clone <repository-url>
cd TOM
```

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**
   - Create a MySQL database
   - Note the connection details in the `.env.example` files

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

## Environment Setup

Copy the example environment files and update them with your configuration:

1. Root directory:

   ```bash
   cp .env.example .env
   ```

2. Backend directory:

   ```bash
   cp backend/.env.example backend/.env
   ```

3. Frontend directory:
   ```bash
   cp frontend/.env.example frontend/.env
   ```

Update each `.env` file with your specific configuration values.

### Database Setup

1. **Creating a dump from production:**

   - Copy the production environment example file:
     ```bash
     cp .env.production.example .env.production
     ```
   - Update `.env.production` with your production database credentials:
     ```
     DATABASE_HOST=database.example.com
     DATABASE_USER=prod_user
     DATABASE_NAME=prod_db
     DATABASE_PASSWORD=prod_password
     ```
   - Export the database:
     ```bash
     npm run db:export
     ```
   - This creates a `database_dump.sql` file using the production credentials in the backend/database/dumps directory.

2. **Import to local database:**
   ```bash
   npm run db:import
   ```
   - This creates a local copy of the database using your the credentials in your .env.development file.

Note: Keep your `.env.production` file secure and never commit it to version control.

## Running the Application

### Backend

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Start in production mode:**

   ```bash
   npm start
   ```

   The backend server will start on the port specified in the `.env` file (default is `3000`).

### Frontend

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   The frontend application will start on `http://localhost:5173` by default and communicate with the backend API.

## Building the Application

### Backend

```bash
cd backend
npm run build
```

- This compiles the TypeScript code into JavaScript and outputs it to the `dist` directory as specified in `tsconfig.node.json`.

### Frontend

```bash
cd frontend
npm run build
```

- This bundles the frontend application for production.

## Running Tests

### Backend Tests

```bash
cd backend
npm test
```

This will execute all tests located in the `backend` directory, including `server.test.ts`. The Node server will run on port 3000 by default, while the test server will run on port 3001.

### Frontend Tests

```bash
cd frontend
npm test
```

This will execute all frontend tests using Jest as the configured testing framework.

## Project Structure

```plaintext
TOM/
├── backend/
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── types/         # TypeScript type definitions
│   │   └── __tests__/     # Test files
├── frontend/
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Vue components
│   │   ├── i18n/          # Internationalization
│   │   ├── router/        # Vue Router configuration
│   │   ├── services/      # API services
│   │   ├── stores/        # Pinia stores
│   │   ├── types/         # TypeScript type definitions
│   │   └── views/         # Vue views/pages
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
