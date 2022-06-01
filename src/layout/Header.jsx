function Header() {
    return (
        <nav className="deep-purple lighten-3">
            <div className="nav-wrapper container ">
                <a href="#" className="brand-logo">React movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repository</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;