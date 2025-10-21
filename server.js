const app = require('./app');

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// SIGINT = Ctrl + C
process.on('SIGINT', () => {
    server.close((err) => {
      if (err) {
        console.log('Exit server');
        process.exit(1);
    }
      console.log('Server closed');
      process.exit(0);
    });    
});