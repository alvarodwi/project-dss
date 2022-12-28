/**
 * model untuk tipe data Area
 */
interface Area {
  name: string;
  dinding: JenisDinding;
  lantai: JenisLantai;
}

/**
 * model untuk tipe data JenisDinding
 */
interface JenisDinding {
  tembok: number;
  batangKayu: number;
  kayu: number;
  plesteran: number;
  anyaman: number;
  bambu: number;
}

/**
 * model untuk tipe data JenisLantai
 */
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
