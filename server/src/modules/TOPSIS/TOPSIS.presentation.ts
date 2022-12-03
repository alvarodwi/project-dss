import { Request, Response } from "express";
import { Area } from "src/models/Area";
import { TOPSISLogic } from "./TOPSIS.logic";

export function TOPSIS(req: Request, res: Response) {
  const areas: Area[] = req.body.areas;
  const data = TOPSISLogic(areas)
  res.send(data);
}
