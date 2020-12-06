import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ChecklistConsumer from "../components/checklistconsumer"
import BasicList from "../components/basic-list"

import HeroHeader from "../components/heroHeader"

const ReasonsPage = ({
  data: {
    site,
    allGoogleSpreadsheetReasons: { edges },
  },
}) => {

  const Posts = edges
    .map(edge => <BasicList key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Reasons — {site.siteMetadata.title}</title>
      </Helmet>
      <h1>Why We Like Each Other!</h1>
      <h2>Reasons &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default ReasonsPage
export const pageQuery = graphql`
  query reasonPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  allGoogleSpreadsheetReasons {
    edges {
      node {
        id
        person
        statement
      }
    }
  }
  }
`