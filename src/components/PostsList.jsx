import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { posts } = usePosts();
  return (
    <>
      {posts.map((post) => {
        return <PostCard post={post}></PostCard>;
      })}
    </>
  );
}

// export default function PostsList({ posts }) {
//   return (
//     <>
//       {posts.map((post) => {
//         return (
//           <tr key={post.id}>
//             <td>{post.id}</td>
//             <td>{post.title}</td>
//             <td>
//               <Link to={`/posts/${post.id}`}>Open</Link>
//             </td>
//           </tr>
//         );
//       })}
//     </>
//   );
// }
