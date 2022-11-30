export class JenisDinding {
  tembok: number;
  batangKayu: number;
  kayu: number;
  plesteran: number;
  bambu: number;

  public totalWall(): number {
    return (
      this.tembok + this.batangKayu + this.kayu + this.plesteran + this.bambu
    );
  }
}
