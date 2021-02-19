import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { dateFixer } from "../functions";

const indexPage = (props) => {
  return (
    <div className="row">
      {props.posts.map((post) => (
        <div key={post.id} className="col-lg-4 col-md-6 mb-3">
          <Link href={`/post?id=${post.id}`}>
            <a className="card h-100">
              <div className="card-header d-flex align-items-center">
                <img src={post.avatar} alt={post.title} />
                <div className="ml-3">
                  <h5 className="mb-0">{post.title}</h5>
                  <small>
                    by {post.publisher} on {dateFixer(post.createdAt)}
                  </small>
                </div>
              </div>
              <div className="card-body">
                {post.content.substring(0, 150) + "..."}
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

indexPage.getInitialProps = async (context) => {
  const res = await fetch(
    `https://602fad41a1e9d20017af0d4c.mockapi.io/api/v1/posts`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    posts: data,
  };
};

export default indexPage;
