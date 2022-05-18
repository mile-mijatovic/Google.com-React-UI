import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyles";

import { lightTheme, darkTheme } from "./theme";

function App() {
  const { theme } = useSelector((state) => state.ui);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
