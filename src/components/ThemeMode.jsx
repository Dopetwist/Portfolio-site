import Icons from "./Icons";

function ThemeMode({ lightTheme, setLightTheme }) {
    return (
        <div>
            <div className="mode-con"
            onClick={() => setLightTheme(!lightTheme)} // Toggle theme
            >
                { lightTheme ? <Icons.Moon id="toggle-icon"/>
                    : <Icons.Sun id="toggle-icon" /> }
            </div>
        </div>
    )
}

export default ThemeMode;