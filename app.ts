import "dotenv/config";
import express from "express";
import routes from "./routes";

const app = express();

// BODY PARSERS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use();

// SERVER
const PORT = Number(process.env.SEVER_PORT) || 3000;
const HOST = process.env.SERVER_HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
