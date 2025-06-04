import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card my-3">
              <img
                src={`http://localhost:3000${post.image}`}
                className="card-img-top   mx-auto d-block "
                alt={post.title}
              />
              <div className="card-body">
                <h5 classname="card-title">{post.title}</h5>
                <p>{post.id}</p>
              </div>
              <div className="card-body">
                <Link to={`/posts/${post.id}`}>Open post</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
