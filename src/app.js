import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//cors setting
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//to accept data like json url params , and static files
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// parsing the browser cookies
app.use(cookieParser());

export { app };
