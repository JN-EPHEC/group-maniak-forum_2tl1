type Filter = "en_cours" | "denontes";

interface Props {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function FilterButtons({ filter, onFilterChange }: Props) {
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
    </div>
  );
}

export default FilterButtons;