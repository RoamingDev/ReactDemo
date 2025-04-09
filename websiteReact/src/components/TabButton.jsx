//children tiene que llamarse children si o sí. 

//onSelect es basicamente la propiedad onClick, pero 
//le cambiamos de nombre para hacer notar que se puede poner el nombre que querramos
export default function TabButton({children, onSelect, isSelected}) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined } onClick= {onSelect}>{
        children}
      </button>
    </li>
  );
}