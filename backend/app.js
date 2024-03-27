import express from 'express';

const app = express();
// 3000 for this demo
const PORT = 8080;
// const PORT = process.env.PORT || 8080;

app.use(express.json());

// Array to store messages
// Messages = { id: number, text: string }
let messages = [];

// REQ = REQUEST --> FROM COMPONENT
// RES = RESPONSE --> WHAT ARE YOU SENDING BACK
app.post('/messages', (req, res) => {
  // Creates a message
  const { text } = req.body;
  // If the text was not included in the request.
  if (!text) {
    return res.status(400).json({ error: 'Missing text property from body..' });
  }

  const newMessage = { id: messages.length + 1, text };
  messages.push(newMessage);

  res.status(201).json(newMessage);
});

app.get('/messages', (req, res) => {
  // Endpoint to get all messages
  // Request body not needed here.
  res.json(messages);
});

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
