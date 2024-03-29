const express = require("express");

// Setup Express server
const app = express();
const http = require("http").Server(app);

// Attach Socket.io to server
const io = require("socket.io")(http);

// Serve web app directory
app.use(express.static("public"));

// Start server
const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Chat server listening on port ${port}.`);
});
