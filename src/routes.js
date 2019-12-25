import featureRoute from "./components/feature/featureController";
import { handleError } from "./lib/error";

const statusCheck = (req, res) => res.status(200).json({ status: "ok" });
export default app => {
  app.use("/status", statusCheck);

  app.use("/feature", featureRoute);

  app.use(handleError);
};
