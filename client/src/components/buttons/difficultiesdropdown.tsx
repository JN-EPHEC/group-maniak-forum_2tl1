
import { useState } from "react";

interface Difficulty {
  difficultyId: number;
  difficultyColorName: string;
  difficultyFrenchScale: string;
  difficultyVerminScale: string;
}

interface Props {
  difficulties: Difficulty[];
  onSelect: (difficultyId: number | null) => void;
}

export default function DifficultyDropdown({ difficulties, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Toutes difficultés");

  const handleSelect = (d: Difficulty | null) => {
    setSelected(d ? d.difficultyColorName : "Toutes difficultés");
    onSelect(d ? d.difficultyId : null);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        {selected}
      </button>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleSelect(null)}>
            Toutes difficultés
          </div>

          {difficulties.map((d) => (
            <div
              key={d.difficultyId}
              className="dropdown-item"
              onClick={() => handleSelect(d)}
            >
              {d.difficultyColorName} — {d.difficultyFrenchScale}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
