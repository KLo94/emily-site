import React from "react"
import { Link } from "gatsby"

const ChecklistConsumer = ({ post }) => (
  <article className="card ">
    <header>
      <h2 className="post-title" >
        {post.status == 1 &&
          <h3 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
            {post.goal}
          </h3>
        }
        {post.status == 0 &&
          <h3>
            {post.goal}
          </h3>
        }
      </h2>
      <div className="post-meta">{post.person}</div>
    </header>
  </article>
)
export default ChecklistConsumer
