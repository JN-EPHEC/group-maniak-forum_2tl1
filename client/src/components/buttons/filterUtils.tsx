export type Filter = "en_cours" | "denontes";

export interface Boulder {
  boulderId: number;
  boulderName: string;
  boulderDesc: string;
  boulderLink: string;
  boulderReleaseDate: string;
  boulderEndDate: string | null;
  difficultyId: number;
  areaId: number;
  boulderImageUrl: string;
  area: {
    areaId: number;
    areaName: string;
  };
  avgRating: number;
  SumRating: string;
}

export function filterBoulders(boulders: Boulder[], filter: Filter): Boulder[] {
  return boulders.filter((b) =>
    filter === "en_cours" ? b.boulderEndDate === null : b.boulderEndDate !== null
  );
}