//children tiene que llamarse children si o sí. 

//onSelect es basicamente la propiedad onClick, pero 
//le cambiamos de nombre para hacer notar que se puede poner el nombre que querramos
export default function TabButton({children, isSelected, ...props}) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined } {...props}>{
        children}
      </button>
    </li>
  );
}