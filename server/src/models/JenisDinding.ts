export class JenisDinding {
  tembok: number;
  batangKayu: number;
  kayu: number;
  plesteran: number;
  anyaman: number;
  bambu: number;

  constructor(json: any) {
    this.tembok = json.tembok;
    this.batangKayu = json.batangKayu;
    this.kayu = json.kayu;
    this.plesteran = json.plesteran;
    this.anyaman = json.anyaman;
    this.bambu = json.bambu;
  }

  totalWall(): number {
    return (
      this.tembok + this.batangKayu + this.kayu + this.plesteran + this.bambu + this.anyaman
    );
  }
}
