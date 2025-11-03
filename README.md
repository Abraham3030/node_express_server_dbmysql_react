# Node Express Server with MySQL and React

This project is a full-stack application that combines a Node.js Express server with a MySQL database and a React frontend. The server provides an API to fetch user data, which is displayed in the React application.

## Project Structure

```
node_express_server_mysql
├── server
│   ├── app.js               # Entry point for the Node.js Express application
│   ├── db
│   │   └── index.js         # Database connection and query handling
│   ├── routes
│   │   └── index.js         # API route definitions
│   ├── package.json          # Node.js server configuration
│   └── .env                 # Environment variables
├── client
│   ├── package.json          # React frontend configuration
│   ├── public
│   │   └── index.html        # Main HTML file for the React application
│   └── src
│       ├── index.jsx         # Entry point for the React application
│       ├── App.jsx           # Main App component
│       ├── components
│       │   └── Users.jsx     # Component to display user data
│       └── api
│           └── api.js        # API call functions
├── .gitignore                # Files and directories to ignore by Git
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL server running and accessible.

### Setup

1. Clone the repository:

   ```
   git clone <repository-url>
   cd node_express_server_mysql
   ```

2. Set up the server:

   - Navigate to the `server` directory:
     ```
     cd server
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file in the `server` directory and add your database connection details:
     ```
     DB_HOST=your_database_host
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     DB_NAME=your_database_name
     PORT=3000
     ```

3. Set up the client:

   - Navigate to the `client` directory:
     ```
     cd ../client
     ```
   - Install dependencies:
     ```
     npm install
     ```

### Running the Application

1. Start the server:

   ```
   cd server
   npm start
   ```

2. Start the React client:

   ```
   cd ../client
   npm start
   ```

The React application will be available at `http://localhost:3000`, and the Express server will be running on a different port (default is 3000, adjust as necessary).

## Usage

- The Express server provides an API endpoint at `/users` to fetch user data from the MySQL database.
- The React application fetches this data and displays it in the `Users` component.

## License

This project is licensed under the MIT License.