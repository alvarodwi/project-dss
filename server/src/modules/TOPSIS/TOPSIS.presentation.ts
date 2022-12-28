import { Request, Response } from "express";
import { Area } from "src/models/Area";
import { TOPSISLogic } from "./TOPSIS.logic";

/**
 * Bagian presentation API untuk handle topsis yang dikirimkan dari client
 */
export function TOPSIS(req: Request, res: Response) {
  const areas: Area[] = req.body.areas;
  const data = TOPSISLogic(areas);
  res.send(data);
}
