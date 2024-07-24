'use client'
import useDarkMood from "@/hooks/use-dark-mode"
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'



const nextModeIcons ={
    'light': <MoonIcon/> ,
    "dark" : <SunIcon />
}

export default function DarkMode(defaultTheme = 'dark') {
    const {theme, toggleTheme} = useDarkMood(defaultTheme = 'dark')

return (

    <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
)

}