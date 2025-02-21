import "../styles/footer.css"
const Footer = () =>{
    return <footer>
        <div className ="div_principal_footer">
            <div>

            </div>
            <div className ="div_footer_parrafo">
                <p>© Todos los derechos reservados</p>
            </div>

            <div className="div_img_footer">
                <a href="https://www.linkedin.com/in/brandon-leonardo-adata-barrera">
                    <img className="img_footer" src="/ProjectGymReact/img/linkedin.webp" alt="Mi linkedin"/>
                </a>
                <a href="https://github.com/rangerLeonardo">
                    <img className="img_footer" src="/ProjectGymReact/img/github-gris_1.webp" alt="Mi github"/>
                </a>
                <a href="mailto:brandonleonardobarrera@gmail.com">
                    <img className="img_footer" src="/ProjectGymReact/img/gmail.webp" alt="Mi email"/>
                </a>
            </div>

        </div>
    </footer>
}

export default Footer
