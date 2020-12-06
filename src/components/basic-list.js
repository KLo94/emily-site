import React from "react"
import { Link } from "gatsby"
import {Collapse} from 'react-collapse'
import ExpandCollapse from 'react-expand-collapse'



const BasicList = ({ post }) => (

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
export default BasicList
