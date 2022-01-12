import { ToggleButton } from "./ToggleStyles"
import { GiSundial, GiMoonOrbit } from 'react-icons/gi'

const Toggle = ({theme, toggleTheme}) => {
const isDark = theme === 'dark'
const displayDark = () => {
    return isDark ? <GiMoonOrbit /> : <GiSundial/>
}
    return (
        <ToggleButton onClick={toggleTheme}>
            {displayDark()} 
        </ToggleButton>
    )
}
export default Toggle
