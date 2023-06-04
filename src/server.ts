import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import KoaLogger from "koa-logger";
import healthcheckRoutes from "./routes/healthcheck";
import thisprojectRoutes from "./routes/thisproject";
import {config} from "./config";

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(
    cors({
        origin: "*"
    })
)

app.use(KoaLogger());

app.use(healthcheckRoutes.routes());
app.use(thisprojectRoutes.routes());

const server = app.listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
}).on("error", err => {
    console.error(err);
});

export default server;