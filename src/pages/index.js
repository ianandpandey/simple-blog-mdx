import * as React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      Welcome to page
      <Link to="/about">About </Link>
    </div>
  );
}
