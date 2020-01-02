import { Router } from "express";

const route = Router();

route.get("/", async (req, res, next) => {
  try {
    return res.status(200).json({ msg: "Hello World" });
  } catch (error) {
    next(error);
  }
});

export default route;
