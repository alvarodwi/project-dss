import { areaToCandidate } from "../../helpers/Converter";
import { zeros } from "../../helpers/Zeros";
import { Candidate } from "../../models/Candidate";
import { Area } from "../../models/Area";
import weight from "./util/Weight";

/**
 * Fungsi TOPSIS yang menjadi model dari DSS
 * @param areas Data input setiap kecamatan dan desa
 * @returns nilai v dari setiap input yang dimasukkan
 */
export function TOPSISLogic(areas: Area[]) {
  let candidates: Candidate[] = [];

  areas.forEach(function (area) {
    candidates = [...candidates, areaToCandidate(area)];
  });

  let faktorNormalisasi: number[] = zeros([weight.length]);
  for (let i = 0; i < weight.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      faktorNormalisasi[i] += Math.pow(candidates[j].criteria[i], 2);
    }
    faktorNormalisasi[i] = Math.sqrt(faktorNormalisasi[i]);
  }

  let normalisasi: number[][] = zeros([candidates.length, weight.length]);
  for (let i = 0; i < candidates.length; i++) {
    for (let j = 0; j < weight.length; j++) {
      let value = candidates[i].criteria[j] / faktorNormalisasi[j];
      normalisasi[i][j] = Number.isNaN(value) ? 0 : value;
    }
  }

  let bobotNormalisasi: number[][] = zeros([candidates.length, weight.length]);
  for (let i = 0; i < candidates.length; i++) {
    for (let j = 0; j < weight.length; j++) {
      bobotNormalisasi[i][j] = normalisasi[i][j] * weight[j];
    }
  }

  let PIS: number[] = zeros([weight.length]);
  let NIS: number[] = zeros([weight.length]);
  for (let i = 0; i < weight.length; i++) {
    PIS[i] = bobotNormalisasi[0][i];
    NIS[i] = bobotNormalisasi[0][i];
    for (let j = 0; j < candidates.length; j++) {
      if (PIS[i] < bobotNormalisasi[j][i]) {
        PIS[i] = bobotNormalisasi[j][i];
      }

      if (NIS[i] > bobotNormalisasi[j][i]) {
        NIS[i] = bobotNormalisasi[j][i];
      }
    }
  }

  let jarakPIS: number[] = zeros([candidates.length, weight.length]);
  let jarakNIS: number[] = zeros([candidates.length, weight.length]);
  for (let i = 0; i < candidates.length; i++) {
    for (let j = 0; j < weight.length; j++) {
      jarakPIS[i][j] = bobotNormalisasi[i][j] - PIS[j];
      jarakNIS[i][j] = bobotNormalisasi[i][j] - NIS[j];
    }
  }

  let nilaiPIS: number[] = zeros([candidates.length]);
  let nilaiNIS: number[] = zeros([candidates.length]);
  for (let i = 0; i < candidates.length; i++) {
    nilaiPIS[i] = 0;
    nilaiNIS[i] = 0;
    for (let j = 0; j < weight.length; j++) {
      nilaiPIS[i] += Math.pow(jarakPIS[i][j], 2);
      nilaiNIS[i] += Math.pow(jarakNIS[i][j], 2);
    }
    nilaiPIS[i] = Math.sqrt(nilaiPIS[i]);
    nilaiNIS[i] = Math.sqrt(nilaiNIS[i]);
  }

  let v: number[] = zeros([candidates.length]);
  for (let i = 0; i < candidates.length; i++) {
    let value = nilaiNIS[i] / (nilaiNIS[i] + nilaiPIS[i]);
    v[i] = Number.isNaN(value) ? 0 : value;
  }

  return v;
}
