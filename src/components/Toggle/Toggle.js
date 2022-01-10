import { ToggleButton } from "./ToggleStyles"
import { GiSundial, GiMoonOrbit } from 'react-icons/gi'

const Toggle = ({theme, toggleTheme}) => {
const isDark = theme === 'dark'
    return (
        <ToggleButton onClick={toggleTheme}>
            <GiSundial/>
            <GiMoonOrbit/>
        </ToggleButton>
    )
}
export default Toggle
