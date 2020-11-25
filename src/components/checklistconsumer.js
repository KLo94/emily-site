import React from "react"
import { Link } from "gatsby"

const ChecklistConsumer = ({ post }) => (
  <article className="card ">
    <header>
      <h2 className="post-title">
          {post.goal} and {post.status}
      </h2>
      <div className="post-meta">{post.status}</div>
    </header>
  </article>
)
export default ChecklistConsumer
