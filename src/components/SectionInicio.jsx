import ItemsList from "./Items/ItemsList"
const SectionInicio = ({userName, userLastname}) =>{
    return <section className="div_principal_contenido">
        <h1>¡Bienvenido {userName != null ? userName : "a RealMan"} {userLastname != null ? userLastname : ""}!</h1>
        <ItemsList className="items_list"/>

    </section>
}

export default SectionInicio;