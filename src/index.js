import os from "os";
import config from "config";
import express from "express";

import cors from "cors";
import morgan from "morgan";

import expressLib from './lib/express';
import routes from "./routes";

const app = express();

/* TODO: move under lib */
// logger
app.use(morgan("dev"));

expressLib(app)
routes(app)

app.get("/", async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ status: "ok", products });
});

app.get("/add", async (req, res, next) => {
  const newProduct = new Product({ name: "first product" });
  await newProduct.save();
  res.status(201).json({ status: "created" });
});

const server = app.listen(process.env.PORT || config.port, () => {
  const host = os.hostname();
  console.log(
    "Listening at http://%s:%s in %s environment.",
    host,
    server.address().port,
    process.env.NODE_ENV
  );
});

server.timeout = 25000; // sets timeout to 25 seconds

export default app;