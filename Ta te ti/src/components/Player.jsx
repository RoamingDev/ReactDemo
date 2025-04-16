import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing(){
        setIsEditing((editing) => !editing); 
        if(isEditing){ //Si isEditing es true, significa que recien clickeamos el boton para terminar de editar
            onChangeName(symbol, playerName); //Esta funcion se ejecuta si EMPEZAMOS a editar el nombre (por eso el if)
        }
        
    }

    function handleChange(event){
        setPlayerName((event.target.value));
    }

    let editablePlayerName = <span className="player-name" >{playerName}</span>;
    if (isEditing) {
        editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange} />);
    }

    return (
        <li className={isActive ? "active" : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
  );
}
