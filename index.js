require("dotenv").config();
const express = require("express");
const app = express();

const { readFileSync, writeFileSync, existsSync } = require("fs");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  if (!existsSync("./count.txt")) {
    writeFileSync("./count.txt", 0);
  }
  const count = readFileSync("./count.txt", "utf-8");
  const newCount = Number(count) + 1;
  writeFileSync("./count.txt", `${newCount}`);
  
  res.status(200).send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My site 🎉🎃😎🌈🔥🚀</title>
  </head>
  <body>
    <h1>Welcome to my website</h1>
    <p> My site was viewed ${newCount} times</p>
    <h1 class="name">Nasser.k</h1>
    <style>
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0%;
        padding: 0%;
      }
      body{
        align-items: center;
        background-color: hsl(100, 0%, 8%);
        color:azure;
        display: flex;
        flex-direction:column;
        height: 100vh;
        justify-content: center;
        width: 100%;
      }
      h1{
        font-family: cubano;
        font-size: 3rem;
        letter-spacing:2px;
        margin-bottom: 20px;
        text-align:center;
      }
      p{
        font-family: poppins;
        font-size: 1rem;
        padding-bottom:20px;
      }
      h1.name{
        background:linear-gradient(to right,orangered,orange);
        color:transparent;
        -webkit-background-clip:text;

      }
    </style>
  </body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`its alive at http://localhost:${PORT}`);
});
