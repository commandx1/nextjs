import React from "react";
import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      Go to
      <Link href="/">
        <a> Home</a>
      </Link>
      .
    </div>
  );
};

export default errorPage;
