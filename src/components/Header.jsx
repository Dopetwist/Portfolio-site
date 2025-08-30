import Nav from "./Nav";

function Header() {
    return (
        <section id="header">
            <header>
                <a href="#home" className="name">
                    <h2> Jonathan Afugwobi </h2>
                </a>

                <Nav />
            </header>
        </section>
    )
}

export default Header;