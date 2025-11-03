const express = require('express');
require('dotenv').config();
// const usersRouter = require('./routes/index'); // Forma 1 de mandar llamar las rutas y realizar un query a una base de db mysql
const db = require('./db/index');// Forma 2 de mandar llamar las rutas y realizar un query a una base de db mysql usando
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS for all routes
app.use(cors());
// app.use('/users', usersRouter); // Forma 1 de usar las rutas desde otro archivo

// Simple request logger
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

// // Servir assets del cliente bundleado (dist/client)
// const clientDistPath = path.join(__dirname, '..', 'dist', 'client'); // cuando bundleado, __dirname apunta a server/, ajusta si necesario
// app.use(express.static(clientDistPath));

// app.get('/*splat', (req, res) => {
//   res.sendFile(path.join(clientDistPath, 'index.html'));
// });


// // Serve static files from React build
// app.use(express.static(path.join(__dirname, '../client/build')));

// // Handle React routing, return all requests to React app
// app.all('/*splat', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express server' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});


app.get('/users', async (req, res, next) => {   // Forma 2 de usar las rutas y hacer query a la db mysql
    try {
        const users = await db.query('SELECT * FROM employees');
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

// Graceful shutdown
const shutdown = () => {
    console.log('Shutting down server...');
    server.close(() => process.exit(0));
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);


// module.exports = app;