import React from "react"
import { Link } from "gatsby"




const ImageList = ({ post }) => (

  <div className="post-thumbnail">
  <img src = {post.localImage.publicURL} />
    <h1 className="post-title">{post.statement}</h1>
  </div>
)
export default ImageList
