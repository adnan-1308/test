const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello from server "});
})

app.listen(5050, () => console.log("Application running"))