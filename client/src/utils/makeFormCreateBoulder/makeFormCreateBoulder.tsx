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
            <label>boulderName : </label>
            <input type="text" name="boulderNameForm"></input><br></br>
            <label> Niveau : </label>
            <select name="boulderLevelIdForm">
            {formBoulder.map((formBoulder) => (
                <option key={`idformBoulder${formBoulder.difficultyId}`} value={formBoulder.difficultyId}>{formBoulder.difficultyColorName}</option>
            ))}
            </select><br></br>
            <label></label>
            <select name="boulderAreaIdForm">
            {formBoulderArea.map((formBoulderArea) => (
                <option key={`idFormBoulderArea${formBoulderArea.areaId}`} value={formBoulderArea.areaId}>{formBoulderArea.areaName}</option>
            ))}
            </select><br></br>
            <label>boulderDesc : </label>
            <input type="text" name="boulderDescForm"></input><br></br>
            <label>boulderLink : </label>
            <input type="text" name="boulderLinkForm"></input><br></br>
            <label>boulderImageUrl : </label>
            <input type="text" name="boulderImageUrlForm"></input><br></br>
            <label>Date de sortie : </label>
            <input type="date" name="boulderDateForm"></input><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default CreateFormAddingBoulder