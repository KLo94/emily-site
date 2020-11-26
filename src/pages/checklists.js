import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ChecklistConsumer from "../components/checklistconsumer"

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
        <title>Checklists — {site.siteMetadata.title}</title>
      </Helmet>
      <h1>A Running List of Goals!</h1>
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
    allGoogleSheetChecklistsRow(sort: {fields: person}) {
        edges {
          node {
            id
            goal
            status
            person
          }
        }
      }
  }
`