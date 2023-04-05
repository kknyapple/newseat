import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyle";
import theme from "./style/theme";

import VideoPage from "./pages/VideoPage";
import ArticlePage from "./pages/ArticlePage";
import VideoDetailPage from "./pages/VideoDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/detail/:detailId" element={<VideoDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
