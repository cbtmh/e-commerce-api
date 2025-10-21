const app = require('./app');

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', (err) => {
    server.close(() => {
        console.log('Exit server');
    })
});