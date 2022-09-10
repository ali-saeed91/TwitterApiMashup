import React, { useState } from "react";
import classes from "./Toogle.module.css";
import styled,  { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeDesign/Theme";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const Toogle = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    if (theme) {
    document.getElementById("theme").style.marginLeft = " 55px"
    }
    theme === "dark" ? setTheme("light") : setTheme("dark");
    if (theme === "dark") {
    document.getElementById("theme").style.marginLeft = "8px"
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className={classes.circle}>
          <div onClick={() => themeToggler()} className={classes.elipse} id="theme"></div>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Toogle;
