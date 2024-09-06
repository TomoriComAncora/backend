import express, { Request, Response, NextFunction, json } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

const app = express();
const port = 5000;
app.use(json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "err",
    message: "Internal server error",
  });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
