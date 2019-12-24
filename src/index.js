import os from "os";
import config from "config";
import express from "express";

import startDB from "./lib/mongoose";
import expressLib from './lib/express';
import routes from "./routes";

const app = express();

expressLib(app)
routes(app)

app.get("/", async (req, res, next) => {
  return res.send(200).json({status: 'ok'})
});

const server = app.listen(process.env.PORT || config.port, () => {
    startDB().then(() => console.log('DB Connected')).catch(err => console.log(err))
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