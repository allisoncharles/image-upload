import express, { Express, NextFunction, Request, Response } from "express";
import imageRoutes from "./src/images/routes";
import dbConnect from "./utils/mongo";
import createError from "http-errors";
require("dotenv").config();

export const SITEURL: string | undefined = process.env.SITEURL;
export const MONGOURI: string = process.env.MONGOURI!;

const port: number = parseInt(process.env.PORT!) || 8000;

const app: Express = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/api/v1/images", imageRoutes);

app.get("/api/v1", (req: Request, res: Response) => {
  res.send("Root route working");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createError.NotFound());
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Image not found" });
});

dbConnect().then(() => {
  app.listen(port, () => console.log(`server listening at port ${port}`));
});
