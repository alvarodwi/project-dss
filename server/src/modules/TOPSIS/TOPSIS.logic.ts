import { areaToCandidate } from "../../helpers/Converter";
import { zeros } from "../../helpers/Zeros";
import { Candidate } from "../../models/Candidate";
import { Area } from "../../models/Area";
import weight from "./util/Weight"

/**
 * Fungsi TOPSIS yang menjadi model dari DSS
 * @param areas
 */
export function TOPSISLogic(areas: Area[]) {
  let candidates: Candidate[] = [];

  areas.forEach(function (area) {
    candidates = [...candidates, areaToCandidate(area)];
  });
  console.log("candidate")
  console.log(candidates)

  let faktorNormalisasi: number[] = zeros([weight.length])
  for(let i = 0; i < weight.length; i++){
    for(let j = 0; j < candidates.length; j++){
      faktorNormalisasi[i] += Math.pow(candidates[j].criteria[i], 2)
    }
    faktorNormalisasi[i] = Math.sqrt(faktorNormalisasi[i])
  }

  console.log("\nFaktor normalisasi")
  console.log(faktorNormalisasi)

  let normalisasi: number[][] = zeros([candidates.length, weight.length])
  for(let i = 0; i < candidates.length; i++) {
    for(let j = 0; j < weight.length; j++) {
      normalisasi[i][j] = (candidates[i].criteria[j]) / faktorNormalisasi[j]
    }
  }

  console.log("\nnormalisasi")
  console.log(normalisasi)

  let bobotNormalisasi: number[][] = zeros([candidates.length, weight.length])
  for(let i = 0; i < candidates.length; i++) {
    for(let j = 0; j < weight.length; j++) {
      bobotNormalisasi[i][j] = normalisasi[i][j] * weight[j]
    }
  }

  console.log("\nnormalisasi terbobot")
  console.log(bobotNormalisasi)

  let PIS: number[] = zeros([weight.length])
  let NIS: number[] = zeros([weight.length])
  for(let i = 0; i < weight.length; i++) {
    PIS[i] = bobotNormalisasi[0][i]
    NIS[i] = bobotNormalisasi[0][i]
    for(let j = 0; j < candidates.length; j++) {
        if(PIS[i] < bobotNormalisasi[j][i]) {
          PIS[i] = bobotNormalisasi[j][i]
        }

        if(NIS[i] > bobotNormalisasi[j][i]) {
          NIS[i] = bobotNormalisasi[j][i]
        }
    }
  }

  console.log("\nnilai ideal positif")
  console.log(PIS)
  console.log("\nnilai ideal positif")
  console.log(NIS)
  
  let jarakPIS: number[] = zeros([candidates.length, weight.length])
  let jarakNIS: number[] = zeros([candidates.length, weight.length])
  for(let i = 0; i < candidates.length; i++) {
    for(let j = 0; j < weight.length; j++) {
      jarakPIS[i][j] = bobotNormalisasi[i][j] - PIS[j]
      jarakNIS[i][j] = bobotNormalisasi[i][j] - NIS[j]
    }
  }

  console.log("\njarak ideal positif")
  console.log(jarakPIS)
  console.log("\njarak ideal positif")
  console.log(jarakNIS)

  console.log("nilai jarak")
  let nilaiPIS: number[] = zeros([candidates.length])
  let nilaiNIS: number[] = zeros([candidates.length])
  for(let i = 0; i < candidates.length; i++) {
    nilaiPIS[i] = 0
    nilaiNIS[i] = 0
    for(let j = 0; j < weight.length; j++) {
      nilaiPIS[i] += Math.pow(jarakPIS[i][j], 2)
      nilaiNIS[i] += Math.pow(jarakNIS[i][j], 2)
    }
    nilaiPIS[i] = Math.sqrt(nilaiPIS[i])
    nilaiNIS[i] = Math.sqrt(nilaiNIS[i])
  }

  console.log("\nD+")
  console.log(nilaiPIS)
  console.log("\nD-")
  console.log(nilaiNIS)

  console.log("nilai v")
  let v : number[] = zeros([candidates.length])
  for(let i = 0; i < candidates.length; i++) {
    v[i] = nilaiNIS[i] / (nilaiNIS[i] + nilaiPIS[i])
  }

  console.log("selesai")

  return v; 
}
