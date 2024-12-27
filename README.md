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

Create an environment file for each of the different environments and copy the contents of the `.env.example` files in the `frontend` and `backend` folders as well as the root directory.

### 1. Development Environment

#### Root Directory

```bash
cp .env.example .env
```

#### Backend Directory

```bash
cp backend/.env.example backend/.env
```

#### Frontend Directory

```bash
cp frontend/.env.example frontend/.env
```

### 2. Production Environment

#### Root Directory

```bash
cp .env.example .env.production
```

#### Backend Directory

```bash
cp backend/.env.example backend/.env.production
```

#### Frontend Directory

```bash
cp frontend/.env.example frontend/.env.production
```

### 3. Additional Environments

If you have other environments (e.g., staging, testing), follow the same pattern to create corresponding `.env` files:

#### Example for Staging Environment

##### Root Directory

```bash
cp .env.example .env.staging
```

##### Backend Directory

```bash
cp backend/.env.example backend/.env.staging
```

##### Frontend Directory

```bash
cp frontend/.env.example frontend/.env.staging
```

### 4. Configure Environment Variables

After copying the `.env.example` files, update each `.env.*` file with your specific configuration values for the respective environment.

- **Backend `.env` Files (`backend/.env.*`):** Update database credentials, JWT secrets, and other backend-specific configurations.
- **Frontend `.env` Files (`frontend/.env.*`):** Update API endpoints, environment-specific settings, and other frontend-specific configurations.

### 5. Switching Between Environments

Ensure that your application is set to use the correct `.env` file based on the environment. This is typically managed by setting the `NODE_ENV` variable when starting your application.

#### Example:

- **Development:**

  ```bash
  NODE_ENV=development npm start
  ```

- **Production:**

  ```bash
  NODE_ENV=production npm start
  ```

## Summary

By organizing your environment configurations into separate `.env` files for each environment, you ensure a clear and maintainable setup. This approach enhances security and makes it easier to manage environment-specific settings.

If you have any further questions or need additional assistance, feel free to ask!

### Database Setup

1. **Creating a dump from production:**

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
