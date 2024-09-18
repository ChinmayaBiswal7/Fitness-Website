const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit-join", (req, res) => {
  const { name, email, phone, age, goal } = req.body;

  // Save data to file (for simplicity)
  const data = `Name: ${name}, Email: ${email}, Phone: ${phone}, Age: ${age}, Goal: ${goal}\n`;
  fs.appendFile("submissions.txt", data, (err) => {
    if (err) throw err;
    console.log("Data saved!");
  });

  res.send(
    "<h1>Thank you for joining us!</h1><p>Your information has been received.</p>"
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
