import type {Filter} from "../../types/Filter.ts"
import type Boulder from "../../types/Boulder.ts"


export function filterBoulders(boulders: Boulder[], filter: Filter): Boulder[] {
  return boulders.filter((b) =>
    filter === "en_cours" ? b.boulderEndDate === null : b.boulderEndDate !== null
  );
}