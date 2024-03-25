import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World with ES Modules!');
});

// A simple object contained route
app.get('/users', (req, res) => {
  res.json([{ name: "User1" }, { name: "User2" }]);
});

// Middleware for handling 404 responses
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Start listening on the desired port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
