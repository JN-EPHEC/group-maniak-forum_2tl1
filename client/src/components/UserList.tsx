
import type{ User } from '../types/user.tsx';

// interfaçage des types
interface UserListProps {
  data: User[];
  setData: (users: User[]) => void;
}

//Fonctions utilisées
import makeList from "../utils/makeList.tsx";
import deleteUser from '../utils/deleteUser.tsx';

export default function UserList({ data, setData }: UserListProps){

    return (
        <ul className="list-group row g-4 w-50 mx-auto"  id="listUsers">
        {makeList(data, (id) => deleteUser(id, setData))}
        </ul>
    );
};