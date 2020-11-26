import React from "react"
import { Link } from "gatsby"



const ChecklistConsumer = ({ post }) => (

  <article className="card ">
  {post.status ==1 && 
    <div className="card" style={{textDecorationStyle: 'solid', backgroundColor: '#6EE5A6'}}>
    <header>
      <h2 className="post-title" >
          <h3 style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
            {post.goal}
          </h3>
      </h2>
      <div className="post-meta">{post.person}</div>
    </header>
    </div>
  }
  {post.status ==0 && 
    <div className="card" >
    <header>
      <h2 className="post-title" >
          <h3 >
            {post.goal}
          </h3>
      </h2>
      <div className="post-meta">{post.person}</div>
    </header>
    </div>
  }
  </article>

)
export default ChecklistConsumer
