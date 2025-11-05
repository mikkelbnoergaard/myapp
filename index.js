const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const messages = [
        "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Random</title></head><body><h1>Tobi lugter af nums! del 1</h1></body></html>",
        "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Random</title></head><body><h1>Welcome to Ponger</h1></body></html>"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.send(randomMessage);
});

app.listen(port, () => console.log(`Server running on port ${port}`));