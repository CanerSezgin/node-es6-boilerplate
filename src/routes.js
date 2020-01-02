import { handleError } from "./lib/error";

import homeRoute from "./components/home/homeController";
import featureRoute from "./components/feature/featureController";

const statusCheck = (req, res) => res.status(200).json({ status: "ok" });
export default app => {
  app.use("/", homeRoute);

  app.use("/status", statusCheck);

  app.use("/feature", featureRoute);

  app.use(handleError);
};
