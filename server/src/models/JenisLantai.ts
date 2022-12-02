export class JenisLantai {
  kayuKualitasTinggi: number;
  keramik: number;
  marmerGranit: number;
  parketVinyl: number;
  kayuKualitasRendah: number;
  semenBata: number;
  ubinTeraso: number;
  tanah: number;
  bambu: number;

  constructor(json: any) {
    this.kayuKualitasTinggi = json.kayuKualitasTinggi;
    this.keramik = json.keramik;
    this.marmerGranit = json.marmerGranit;
    this.parketVinyl = json.parketVinyl;
    this.kayuKualitasRendah = json.kayuKualitasRendah;
    this.semenBata = json.semenBata;
    this.ubinTeraso = json.ubinTeraso;
    this.tanah = json.tanah;
    this.bambu = json.bambu;
  }

  totalFloor(): number {
    return (
      this.kayuKualitasTinggi +
      this.keramik +
      this.marmerGranit +
      this.parketVinyl +
      this.kayuKualitasRendah +
      this.semenBata +
      this.ubinTeraso +
      this.tanah +
      this.bambu
    );
  }
}
