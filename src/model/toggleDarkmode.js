import { createContext, useEffect, useState } from "react";
const themes = {
    dark: '',
    light: 'white-content'
};

const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => { },
});

function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-content');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('white-content');
                break;
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }} >
            {props.children}
        </ThemeContext.Provider>
    )

}

export { ThemeContextWrapper, ThemeContext, themes }