import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  console.log("post", post);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      console.log(res.data);
      setPost(res.data.data);
    });
  }, []);

  //  controllo
  if (!post) return <h2>Caricamento...</h2>;

  return (
    <>
      <div className="container">
        <h1 className="my-2">{post.title}</h1>
        <img
          src={`http://localhost:3000${post.image}`}
          className="img-thumbnail rounded mx-auto d-block my-3"
          alt={post.title}
        />
        <p>{post.content}</p>
        <ul>
          {post.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
