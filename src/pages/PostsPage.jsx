import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    });
  }, []);

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
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Link to={`/posts/${post.id}`}>Open</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
