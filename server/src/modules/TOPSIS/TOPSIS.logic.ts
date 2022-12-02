import { areaToCandidate } from "../../helpers/Converter";
import { Candidate } from "src/models/Candidate";
import { Area } from "../../models/Area";

/**
 * Fungsi TOPSIS yang menjadi model dari DSS
 * @param areas
 */
export function TOPSISLogic(areas: Area[]) {
  let candidates: Candidate[] = [];

  areas.forEach(function (area) {
    candidates = [...candidates, areaToCandidate(area)];
  });

  console.log("returning..");

  return candidates;
}
