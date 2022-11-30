import express, { Express } from "express";
import bodyParser from "body-parser";

const app: Express = express();
const PORT: number = 5000;

app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`server running on port : http://localhost:${PORT}`);
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Rest API with ts created!");
});
