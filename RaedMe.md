# URL Shortener Service

This project implements a URL shortening service that takes any given URL, shortens it, and stores it in a MongoDB database. It serves as an introduction to backend development using Node.js, Express.js, and MongoDB.

## Prerequisites

Before diving into this project, ensure you have the following prerequisites installed:

- Node.js (v16.17 or higher)
- npm
- MongoDB

## Installation and Setup

**Step 1: Install Node Modules**

Navigate to the project directory and install the required dependencies using npm:

```bash
npm install
```

**Step 2: Run the Application**

Launch the URL shortener service using the following command:

```bash
npm run start
```

## Understanding the Service

The URL shortener service provides two main functionalities:

1. **URL Shortening:** Users can submit long URLs to the service, which generates a unique shortened URL and stores the original URL and its corresponding shortened URL in the MongoDB database.

2. **URL Redirection:** When a user accesses a shortened URL, the service redirects them to the original long URL stored in the database.

## Contributions

We encourage contributions to this project. Feel free to fork the repository, implement your improvements, and submit a pull request.
