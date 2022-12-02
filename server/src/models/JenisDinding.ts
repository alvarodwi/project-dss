export class JenisDinding {
  tembok: number;
  batangKayu: number;
  kayu: number;
  plesteran: number;
  bambu: number;

  constructor(json: any) {
    this.tembok = json.tembok;
    this.batangKayu = json.batangKayu;
    this.kayu = json.kayu;
    this.plesteran = json.plesteran;
    this.bambu = json.bambu;
  }

  totalWall(): number {
    return (
      this.tembok + this.batangKayu + this.kayu + this.plesteran + this.bambu
    );
  }
}
