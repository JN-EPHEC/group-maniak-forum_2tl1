import { useState, useEffect } from 'react';
import './App.css';

//Fonctions utilisées

import loadData from './utils/loadData.tsx';
//Components
import UserForm from "./components/UserForm";
import UserList from './components/UserList.tsx';

//Définition de d'un interface User pour le typage
import type { User } from './types/user.tsx';

function App() {
  const [data, setData] = useState<User[]>([]);

// 2. Appel API au montage du composant
  useEffect(() => {
    loadData(setData);
  }, []);
  return (
    
    <div className="container mt-4">
      <h1 className="text-center">Liste des Users</h1>
      <UserForm setData={setData} />
      <UserList data={data} setData={setData} />

    </div>
  );
}

export default App
