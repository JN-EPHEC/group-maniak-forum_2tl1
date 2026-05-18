import { useState, useEffect } from "react";
import { getStars } from "../../utils/conversionRating";
import { usePage } from "../../PageContext";
import FilterButtons from "../../components/buttons/filterButton";
import { type Boulder, type Filter, filterBoulders } from "../../components/buttons/filterUtils";

interface Props {
  gymId: string;
}

function GetBoulder({ gymId }: Props) {
  const [boulders, setBoulders] = useState<Boulder[]>([]);
  const [filter, setFilter] = useState<Filter>("en_cours");
  const setPage = usePage();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/boulders/byGym/${gymId}`)
      .then((res) => res.json())
      .then((data) => setBoulders(data));
  }, []);

  const filteredBoulders = filterBoulders(boulders, filter);

  return (
    <div>
      <FilterButtons filter={filter} onFilterChange={setFilter}/>

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
                🔴 Démontée le : {new Date(boulder.boulderEndDate).toLocaleDateString("fr-FR")}
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