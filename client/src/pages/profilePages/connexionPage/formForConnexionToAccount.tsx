function FormForConnexionToAccount(){
    return (
        <div>
            <form className="formConnexionAccount">
                <label>Adresse e-mail : </label>
                <input className="inputEmail" type="email"></input>
                <label>Mot de passe : </label>
                <input className="inputPassWD" type="password"></input>
            </form>
        </div>
    )
}
export default FormForConnexionToAccount