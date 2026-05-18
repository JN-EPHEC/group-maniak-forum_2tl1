import { useState, useEffect } from "react";
import { getStars } from "../../utils/conversionRating";
import { usePage } from "../../PageContext";
import FilterButtons from "../../components/buttons/filterButton";
import { filterBoulders } from "../../components/buttons/filterUtils";
import type { Filter } from "../../types/Filter";
import type Boulder from "../../types/boulder";

interface Props {
  gymId: string;
}

function GetBoulder({ gymId }: Props) {
  const [boulders, setBoulders] = useState<Boulder[]>([]);
  const [filter, setFilter] = useState<Filter>("en_cours");

  const [difficulties, setDifficulties] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);

  const setPage = usePage();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/boulders/byGym/${gymId}`)
      .then((res) => res.json())
      .then((data) => setBoulders(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/difficulties`)
      .then((res) => res.json())
      .then((data) => setDifficulties(data));
  }, []);

  const filteredBoulders = filterBoulders(boulders, filter).filter((b) =>
    difficultyFilter ? b.difficultyId === difficultyFilter : true
  );

  if (filteredBoulders.length === 0) {
    return (    <div>
      <FilterButtons
        filter={filter}
        onFilterChange={setFilter}
        difficulties={difficulties}
        onDifficultyChange={setDifficultyFilter}
      />Pas de blocs enregistrés qui correspondent à votre demande</div>
    )
  }

  return (
    <div>
      <FilterButtons
        filter={filter}
        onFilterChange={setFilter}
        difficulties={difficulties}
        onDifficultyChange={setDifficultyFilter}
      />

      <div id="boulderList">
        {filteredBoulders.map((boulder) => (
          <div
            key={`idBoulder${boulder.boulderId}`}
            id={`idBoulder${boulder.boulderId}`}
            className={`difficultyId${boulder.difficultyId}`}
            onClick={() => setPage(`boulderId-${boulder.boulderId}`)}
          >
            {boulder.boulderImageUrl && (
              <img alt="img_boulder" src={boulder.boulderImageUrl} />
            )}
            <span className="boulderName">{boulder.boulderName}</span>
            <span className="descriptionBoulder">{boulder.boulderDesc}</span>
            <span className="nameArea">📍{boulder.area.areaName}</span>

            {boulder.boulderEndDate && (
              <span className="endDate">
                🔴 Démontée le :{" "}
                {new Date(boulder.boulderEndDate).toLocaleDateString("fr-FR")}
              </span>
            )}

            <span id="ratingStars">
              {getStars(boulder.avgRating).map((star, i) =>
                star === "full" ? (
                  <span key={i} className="star-full">★</span>
                ) : star === "half" ? (
                  <span key={i} className="star-half">★</span>
                ) : (
                  <span key={i} className="star-empty">★</span>
                )
              )}
              {`(${boulder.SumRating})`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetBoulder;
