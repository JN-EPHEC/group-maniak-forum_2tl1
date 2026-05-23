import DifficultyDropdown from "./difficultiesdropdown.tsx";
import type {Filter} from "../../types/Filter.ts"

interface Props {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  difficulties: any[];
  onDifficultyChange: (difficultyId: number | null) => void;
}

export default function FilterButtons({
  filter,
  onFilterChange,
  difficulties,
  onDifficultyChange,
}: Props) {
  return (
    <div id="filterButtons">
      <button
        id="btnBlue"
        className={filter === "en_cours" ? "active" : ""}
        onClick={() => onFilterChange("en_cours")}
      >
        En cours
      </button>

      <button
        id="btnBlue"
        className={filter === "denontes" ? "active" : ""}
        onClick={() => onFilterChange("denontes")}
      >
        Démontés
      </button>

      <DifficultyDropdown
        difficulties={difficulties}
        onSelect={onDifficultyChange}
      />
    </div>
  );
}
