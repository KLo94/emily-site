import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ChecklistConsumer from "../components/checklistconsumer"
import ImageList from "../components/imagelist"

import HeroHeader from "../components/heroHeader"

const JokesPage = ({
  data: {
    site,
    allGoogleSpreadsheetJokes: { edges },
  },
}) => {

  const Posts = edges
    .map(edge => <ImageList key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Jokes — {site.siteMetadata.title}</title>
      </Helmet>
      <h1>Running Jokes In Our Relationship!</h1>
      <h2>Jokes &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default JokesPage
export const pageQuery = graphql`
  query jokesPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  allGoogleSpreadsheetJokes {
    edges {
      node {
        id
        person
        statement
        localImage{
          publicURL
        }
      }
    }
  }
  }
`