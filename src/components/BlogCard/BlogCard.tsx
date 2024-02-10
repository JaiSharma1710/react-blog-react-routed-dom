import { Link } from "react-router-dom";

import "./BlogCard.css";

export default function BlogCard({ index }: { index: number }) {
  return (
    <Link to={`detail/${index}`} id="card-body">
      <div className="card-img-container">
        <img
          className="card-img"
          src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
          alt="top image"
        />
      </div>
      <div className="card-text-container">
        <h3 className="blog-title">this is blog title</h3>
        <p className="blog-summary">this is blog summart content</p>
      </div>
    </Link>
  );
}
