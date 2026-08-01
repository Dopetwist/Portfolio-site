import Nav from "./Nav";

function Header({ lightTheme, setLightTheme }) {
    return (
        <header id="header">
            <a href="#home" className="name">
                <figure>
                    <img src={lightTheme ? "/JA-Logo2.png" : "/JA-Logo.png"} alt="Jonathan's Logo" />
                </figure>
                <h2> Jonathan <br /> Afugwobi </h2>
            </a> 

            <Nav 
                lightTheme={lightTheme} 
                setLightTheme={setLightTheme}
            />
        </header>
    )
}

export default Header;