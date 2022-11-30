import { Candidate } from "src/models/Candidate";
import { Area } from "../models/Area";

/**
 * Fungsi untuk convert object class Area menjadi Candidate
 * @param area objek yang akan diconvert
 */
export function areaToCandidate(area: Area): Candidate {
  let totalWall: number = area.dinding.totalWall();
  let totalFloor: number = area.lantai.totalFloor();

  let k1: number = area.dinding.tembok;
  let k2: number = area.dinding.batangKayu + area.dinding.kayu;
  let k3: number = area.dinding.plesteran + area.dinding.bambu;
  let k4: number =
    area.lantai.kayuKualitasTinggi +
    area.lantai.keramik +
    area.lantai.marmerGranit +
    area.lantai.parketVinyl;
  let k5: number =
    area.lantai.kayuKualitasRendah +
    area.lantai.semenBata +
    area.lantai.ubinTeraso;
  let k6: number = area.lantai.tanah + area.lantai.bambu;

  return {
    k1: k1 / totalWall,
    k2: k2 / totalWall,
    k3: k3 / totalWall,
    k4: k4 / totalFloor,
    k5: k5 / totalFloor,
    k6: k6 / totalFloor,
  };
}
