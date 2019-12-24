import bodyParser from "body-parser";
import morgan from "morgan";

export default app => {
    app.use(morgan("dev"));
    // Body Parser
    app.use(bodyParser.json());
}