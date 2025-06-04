import { usePosts } from "../contexts/PostsContext";
import axios from "axios";
import { useState, useEffect } from "react";

import PostsList from "../components/PostsList";

export default function PostsPage() {
  const { posts } = usePosts();

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/posts").then((res) => {
  //     console.log(res.data.data);
  //     setPosts(res.data.data);
  //   });
  // }, []);

  return (
    <div className="container">
      <h1>Lista dei post</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titolo</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <PostsList posts={posts}></PostsList>
        </tbody>
      </table>
    </div>
  );
}
