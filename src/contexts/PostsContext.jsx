import { createContext, useContext, useEffect, useState } from "react";
const PostsContext = createContext();

import axios from "axios";

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    });
  };
  useEffect(fetchPosts, []);
  const postsData = { posts, refreshPosts: fetchPosts };
  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
}

function usePosts() {
  return useContext(PostsContext);
}

export { PostsProvider, usePosts };
