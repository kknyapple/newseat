import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import theme from "./style/theme";

import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<VideoPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
