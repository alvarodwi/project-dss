import { Request, Response } from "express";
import { Area } from "src/models/Area";
import { TOPSISLogic } from "./TOPSIS.logic";

export function TOPSIS(req: Request, res: Response) {
  const areas: Area[] = req.body.areas;
  console.log(typeof req.body.areas[0]);
  res.send(TOPSISLogic(areas));
}
