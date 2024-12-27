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
git clone https://github.com/FAOEuFMD/TOM.git
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

To configure the environment variables for the root, frontend, and backend, follow these steps:

### 1. Run the Environment Setup Script

The `setup-env.sh` script automates the process of copying `.env.example` files to `.env` files in the root, `backend`, and `frontend` directories, as well as setting up additional environments like `production` and `staging` if the example files exist.

```bash
# Make the script executable (if not already done)
chmod +x setup-env.sh

# Execute the script
./setup-env.sh
```

**Example Output:**

```
🔧 Starting environment setup...
📂 Processing root directory...
✅ Copied .env.example to .env.
✅ Copied .env.production.example to .env.production.
✅ Copied .env.staging.example to .env.staging.

📂 Processing backend directory...
✅ Copied backend/.env.example to backend/.env.
✅ Copied backend/.env.production.example to backend/.env.production.
✅ Copied backend/.env.staging.example to backend/.env.staging.

📂 Processing frontend directory...
✅ Copied frontend/.env.example to frontend/.env.
✅ Copied frontend/.env.production.example to frontend/.env.production.
⚠️ Source file frontend/.env.staging.example does not exist. Skipping...

🎉 Environment setup complete. Please review and update the .env files with your specific configurations.
```

### 3. Update the `.env` Files

After running the script, you'll have `.env`, `.env.production`, and `.env.staging` files in the root, `backend`, and `frontend` directories (if the example files exist). Open each file and replace the placeholder values with your specific configuration details.

- **Root:**

  - `./.env`
  - `./.env.production` _(if applicable)_
  - `./.env.staging` _(if applicable)_

- **Backend:**

  - `backend/.env`
  - `backend/.env.production` _(if applicable)_
  - `backend/.env.staging` _(if applicable)_

- **Frontend:**
  - `frontend/.env`
  - `frontend/.env.production` _(if applicable)_
  - `frontend/.env.staging` _(if applicable)_

### 4. Maintaining the `.env.example` Files

- **Keep `.env.example` Files Updated:**

  - Regularly update the `.env.example` files to reflect any new environment variables added to the project. This ensures that developers have the latest configuration requirements.

- **Backend `.env` Files (`backend/.env.*`):** Update database credentials, JWT secrets, and other backend-specific configurations.
- **Frontend `.env` Files (`frontend/.env.*`):** Update API endpoints, environment-specific settings, and other frontend-specific configurations.

### 5. Start the Application

With the environment variables configured, you can now start the backend and frontend applications.

- **Backend:**

  ```bash
  cd backend
  npm install
  npm start
  ```

- **Frontend:**

  ```bash
  cd frontend
  npm install
  npm start
  ```

### 5. Switching Between Environments

Ensure that your application is set to use the correct `.env` file based on the environment. This is typically managed by setting the `NODE_ENV` variable when starting your application.

#### Example:

- **Development:**

  ```bash
  NODE_ENV=development npm start
  ```

- **Staging:**

  ```bash
  NODE_ENV=staging npm start
  ```

- **Production:**

  ```bash
  NODE_ENV=production npm start
  ```

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
