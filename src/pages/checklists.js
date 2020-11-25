import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ChecklistConsumer from "../components/ChecklistConsumer"

import HeroHeader from "../components/heroHeader"

const ChecklistPage = ({
  data: {
    site,
    allGoogleSheetChecklistsRow: { edges },
  },
}) => {

  const Posts = edges
    .map(edge => <ChecklistConsumer key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2>goals &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default ChecklistPage
export const pageQuery = graphql`
  query checklistPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allGoogleSheetChecklistsRow {
        edges {
          node {
            id
            goal
            status
          }
        }
      }
  }
`