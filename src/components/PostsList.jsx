import { Link } from "react-router-dom";

export default function PostsList({ posts }) {
  return (
    <>
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
    </>
  );
}
