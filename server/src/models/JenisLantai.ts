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

  public totalFloor(): number {
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
