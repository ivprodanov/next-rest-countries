import { createContext } from "react";

export const themes = {
    dark: {
        dark: true,
        background: 'hsl(207, 26%, 17%)',
        text: 'hsl(0, 0%, 100%)',
        elements: 'hsl(209, 23%, 22%)'
    },
    light: {
        dark: false,
        background: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)',
        elements: 'hsl(0, 0%, 100%)'
    }
}

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {}
});