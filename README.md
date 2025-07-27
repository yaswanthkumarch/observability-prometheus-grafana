
# 3-Tier DevSecOps Project

This repository contains a simple Node.js API and a React client for a user management demo. It demonstrates a typical 3-tier architecture setup with backend API and frontend client, perfect for exploring DevSecOps practices.

---

## Project Overview

- **API**: Node.js server handling user management endpoints.
- **Client**: React application providing a user interface with animated banner.
- **Goal**: Showcases a full-stack example ready for DevSecOps pipeline integration and monitoring.

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18 or later recommended)
- npm (comes with Node.js)

---

## Setup Instructions

### 1. Install Dependencies

Open a terminal and run the following commands to install dependencies for both the API and client:

```bash
cd api
npm install

cd ../client
npm install
````

### 2. Start the API Server

In your terminal:

```bash
cd api
npm start
```

The API server will start on the default port (usually 3001 or configured in your project).

### 3. Start the React Client

Open a new terminal window or tab and run:

```bash
cd client
npm start
```

This will launch the React app in development mode, usually opening automatically at `http://localhost:3000`.

---

## Usage

Once both servers are running, open your browser and visit:

```
http://localhost:3000
```

You should see the React client with an animated banner welcoming you to screen  and be able to interact with the user management features.

---

## Notes

* Make sure ports 3000 and the API port are free on your machine.
* You can customize API endpoints and ports in the respective project config files.
* This project is designed to be a base for integrating CI/CD, monitoring, and security practices.
