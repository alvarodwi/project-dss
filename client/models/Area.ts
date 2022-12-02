interface Area {
  name: string;
  dinding: JenisDinding;
  lantai: JenisLantai;
}

interface JenisDinding {
  tembok: number;
  batangKayu: number;
  kayu: number;
  plesteran: number;
  bambu: number;
}

interface JenisLantai {
  kayuKualitasTinggi: number;
  keramik: number;
  marmerGranit: number;
  parketVinyl: number;
  kayuKualitasRendah: number;
  semenBata: number;
  ubinTeraso: number;
  tanah: number;
  bambu: number;
}
