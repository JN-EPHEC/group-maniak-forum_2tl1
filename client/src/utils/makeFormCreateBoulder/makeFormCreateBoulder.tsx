import { useState, useEffect } from "react";
import { postFormCreateBoulder } from "./functionFormCreateBoulder";

function CreateFormAddingBoulder(){

    interface formAddBloc{
        difficultyColorName: string;
        difficultyId: number;
    }

    interface formAddBlocArea{
        areaId: number;
        areaName: string;
    }
    const [formBoulder, setformBoulder] = useState<formAddBloc[]>([]);

    const [formBoulderArea, setformBoulderArea] = useState<formAddBlocArea[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/difficulties`)
            .then((res) => res.json())
            .then((data) => setformBoulder(data));
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/areaGyms`)
            .then((res) => res.json())
            .then((data) => setformBoulderArea(data));
    }, []);
    

    return (
    <form id="formCreationBoulder" onSubmit={postFormCreateBoulder}>
        <div className="form-field">
            <label>Nom du bloc</label>
            <input type="text" name="boulderNameForm" />
        </div>

        <div className="form-field">
            <label>Niveau</label>
            <select name="boulderLevelIdForm">
                {formBoulder.map((f) => (
                    <option key={`idformBoulder${f.difficultyId}`} value={f.difficultyId}>
                        {f.difficultyColorName}
                    </option>
                ))}
            </select>
        </div>

        <div className="form-field">
            <label>Zone</label>
            <select name="boulderAreaIdForm">
                {formBoulderArea.map((f) => (
                    <option key={`idFormBoulderArea${f.areaId}`} value={f.areaId}>
                        {f.areaName}
                    </option>
                ))}
            </select>
        </div>

        <div className="form-field">
            <label>Description</label>
            <input type="text" name="boulderDescForm" />
        </div>

        <div className="form-field">
            <label>Lien vidéo</label>
            <input type="text" name="boulderLinkForm" />
        </div>

        <div className="form-field">
            <label>Image URL</label>
            <input type="text" name="boulderImageUrlForm" />
        </div>

        <div className="form-field">
            <label>Date de sortie</label>
            <input type="date" name="boulderDateForm" />
        </div>

        <input type="submit" value="Envoyer" />
    </form>
)
}

export default CreateFormAddingBoulder