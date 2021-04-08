import React, {useState, useCallback} from "react";
import NavBar from "../../components/NavBar/index";

const NavBarContainer = ({isDarkTheme, ThemeHandler}) => {
    const [open, setOpen] = useState(false);

    const NavBarClickHandler = useCallback((event) => {
        event.preventDefault()
        setOpen(!open)
      }, [open])

    return (
        <NavBar {...{open, NavBarClickHandler, isDarkTheme, ThemeHandler}} />
    )
}

export default NavBarContainer;