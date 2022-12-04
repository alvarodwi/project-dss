export default function () {
  return useState<Area[]>("areas", () => Array<Area>());
}
