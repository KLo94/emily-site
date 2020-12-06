import React from "react"
import { Link } from "gatsby"



const ChecklistConsumer = ({ post }) => (

  <article className="card ">
    <div className="card" >
    <header>
      <h2 className="post-title" >
          <h3 >
            {post.statement}
          </h3>
      </h2>
      <div className="post-meta">{post.person}</div>
    </header>
    </div>
  </article>

)
export default ChecklistConsumer
