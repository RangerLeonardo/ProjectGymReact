import ItemsList from "./Items/ItemsList"
const SectionInicio = ({userName, userLastname, filter}) =>{
    return <section className="div_principal_contenido view_default">
        <h1>¡Bienvenido {userName != null ? userName : "a RealMan"} {userLastname != null ? userLastname : ""}!</h1>
        <ItemsList filter={filter} className="items_list"/>

    </section>
}

export default SectionInicio;