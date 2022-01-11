import { ToggleButton } from "./ToggleStyles"
import { GiSundial, GiMoonOrbit } from 'react-icons/gi'

const Toggle = ({theme, toggleTheme}) => {
const isDark = theme === 'dark'
    return (
        <ToggleButton onClick={toggleTheme}>
            {isDark ? <GiMoonOrbit /> : <GiSundial/>} 

        </ToggleButton>
    )
}
export default Toggle
