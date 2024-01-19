import mongoose from "mongoose";
import { MONGOURI } from "../index";

export default async function dbConnect() {
  await mongoose
    .connect(MONGOURI)
    .then(() => console.log("Database connected"));
}
