import { useState } from "react";
import type { User } from "../types/user";
import postUser from "../utils/postUser";

interface UserFormProps {
  setData: (users: User[]) => void;
}

export default function UserForm({ setData }: UserFormProps) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await postUser(prenom, nom, setData);

    setPrenom("");
    setNom("");
  }

  return (
    <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
          <div className="mb-3 col-auto  ">
              <input 
                type="text" 
                className="form-control" 
                value={nom}
                placeholder="Nom"
                onChange={(e) => setNom(e.target.value)}
                required
                />
          </div>
          <div className="mb-3 col-auto  ">
              <input 
                type="text" 
                className="form-control" 
                value={prenom}
                placeholder="Prénom"
                onChange={(e) => setPrenom(e.target.value)}
                required
                />
          </div>
          <div className="col-auto">
              <button type="submit" className="btn btn-primary">Ajouter</button>
          </div>
    </form >
  );
}