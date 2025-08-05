import express, { Request, Response, NextFunction } from "express";
import cors from "cors";




const app = express();

app.use(cors());
app.use(express.json());

const port = 3999;
const error = "Internal Server Error";

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
