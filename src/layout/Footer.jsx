function Footer() {
    return (
        <footer className="page-footer light-blue lighten-3 ">
            <div className="wrapper container">
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;