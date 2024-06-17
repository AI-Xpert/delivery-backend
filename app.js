import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import pkg from "body-parser";
import authRoutes from "./routes/auth.js"

dotenv.config();

const { json } = pkg;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.get("/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Node application started"
  }); 
});

app.listen(PORT, () => console.log(`server is listening at port ${PORT}!`));