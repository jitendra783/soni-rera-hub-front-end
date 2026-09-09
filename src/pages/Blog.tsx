import { Link } from "react-router-dom";
import { blogs } from "../data/blog";
import "./Blog.css";

export default function Blogs() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          KNOWLEDGE CENTER
        </div>

        <h1>
          RERA Insights & Articles
        </h1>

        <p>
          Stay informed with practical articles,
          RERA updates and real-estate knowledge.
        </p>
      </section>

      <section className="section">
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article
              className="blog-card"
              key={blog.id}
            >
              <div className="blog-image">
                {blog.category}
              </div>

              <div>
                <span>
                  {blog.category}
                </span>

                <h3>
                  {blog.title}
                </h3>

                <p>
                  {blog.description}
                </p>

                <Link to={`/blogs/${blog.id}`}>
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}