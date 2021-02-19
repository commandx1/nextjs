import React from "react";
import { withRouter } from "next/router";
import { dateFixer } from "../functions";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = ({ post }) => {
  return (
    <div className="container my-5 post">
      <div className="mb-4">
        <h3 className="mb-1 text-uppercase">{post.title}</h3>
        <small className="lead d-flex align-items-center">
          <img
            className="mr-2"
            src={post.avatar}
            alt={post.title}
            style={{ borderRadius: "50%", height: "30px" }}
          />{" "}
          {post.publisher} - {dateFixer(post.createdAt)}
        </small>
      </div>
      <p>{post.content}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://602fad41a1e9d20017af0d4c.mockapi.io/api/v1/posts/${query.id}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    post: data,
  };
};

export default withRouter(Post);
