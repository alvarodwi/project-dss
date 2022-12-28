import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

//router
import topsisRouter from "./routes/Route";

const app: Express = express();
const PORT: number = 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server running on port : http://localhost:${PORT}`);
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Rest API TOPSIS model created!");
});

app.use("/", topsisRouter);
