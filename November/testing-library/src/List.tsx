interface props {
  nombre: string,
  apellido: string,
  edad: number
}

// export default function List(user: props) {
export default function List(user: props) {

  return (
    <>
      <ol data-testid="user-information">
        {user.nombre && <li>{user.nombre}</li>}
        {user.apellido && <li data-testid="user-lastname">{user.apellido}</li>}
        {user.edad && <li>{user.edad}</li>}
      </ol>
    </>
  );
}