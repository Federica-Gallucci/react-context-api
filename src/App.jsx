import { BrowserRouter, Routes, Route } from "react-router";
import { PostsProvider } from "./contexts/PostsContext";

//pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";

// import NotFoundPage from "./pages/NotFoundPage";

//layouts
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotte che hanno lo stesso layout */}
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/aboutus" element={<AboutUsPage />} />
            {/* Rotte che hanno in comune il prefisso /posts */}
            <Route path="/posts">
              <Route path="" element={<PostsPage />} />
              <Route path=":id" element={<PostDetailPage />} />
            </Route>

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
