import { JenisDinding } from "./JenisDinding";
import { JenisLantai } from "./JenisLantai";

/**
 * Class untuk menampung input data nama, data jenis dinding, dan data jenis lantai.
 */
export class Area {
  name: string;
  dinding: JenisDinding;
  lantai: JenisLantai;
}
