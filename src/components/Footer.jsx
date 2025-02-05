import "../styles/footer.css"
const Footer = () =>{
    return <footer>
        <div className ="div_footer" id="div_footer">

        <div className ="div_parrafo">
            <p>© Todos los derechos reservados</p>
        </div>

        <div>
            <img className="img_footer" src="/img/linkedin.webp" alt="Mi linkedin"/>
            <img className="img_footer" src="/img/github-gris_1.webp" alt="Mi github"/>
            <img className="img_footer" src="/img/gmail.webp" alt="Mi email"/>
        </div>

        </div>
    </footer>
}

export default Footer
