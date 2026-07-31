import Nav from "./Nav";

function Header() {
    return (
        <header id="header">
            <a href="#home" className="name">
                <figure>
                    <img src="/JA-Logo.png" alt="Logo" />
                </figure>
                <h2> Jonathan <br /> Afugwobi </h2>
            </a> 

            <Nav />
        </header>
    )
}

export default Header;