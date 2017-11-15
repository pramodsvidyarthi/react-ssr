import express from "express";
import React from "React";
import { renderToString } from "react-dom/server";
import App from "../shared/App.js";
import "isomorphic-fetch";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(initialData => {
      const markup = renderToString(<App initialData={initialData} />);
      res.send(`
    <!DOCTYPE html>
    <head>
      <title>Universal React</title>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}</script>
      <link rel="stylesheet" href="/css/main.css">
      <script src="/bundle.js" defer></script>
    </head>
    <body>
      <div id="root">${markup}</div>
    </body>
  </html>
    `);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
