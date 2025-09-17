import Nav from "./Nav";

function Header() {
    return (
        <header id="header">
            <a href="#home" className="name">
                <h2> Jonathan Afugwobi </h2>
            </a> 

            <Nav />
        </header>
    )
}

export default Header;