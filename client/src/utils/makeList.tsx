import type { User } from "../types/user";

function makeList(
    array:Array<User>,
    deleteUser: (id: number) => void
)
    {
    let list = array.map(i=> (
        <li key={i.id} className="list-group-item d-flex align-items-center">
            {i.prenom} {i.nom}
            <button className="btn btn-danger ms-auto" onClick={() => deleteUser(i.id)}>X</button>
        </li>
    ))
    return list;
};

export default makeList
