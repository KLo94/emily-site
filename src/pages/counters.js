import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import  moment from "moment"


const today = new Date()
const anniversary = new Date("2020-08-14")
const firstmeetup = new Date("2019-10-21")
const secondmeetup = new Date("2020-07-21")
const leavingdate = new Date("2020-12-06") // remember this is equivalent to 06 01 2010
//dates in js are counted from 0, so 05 is june

Date.getFormattedDateDiff = function(date1, date2) {
  var b = moment(date1),
      a = moment(date2),
      intervals = ['years','months','weeks','days'],
      out = [];
 
  for(var i=0; i<intervals.length; i++){
      var diff = a.diff(b, intervals[i]);
      b.add(diff, intervals[i]);
      out.push(diff + ' ' + intervals[i]);
  }
  return out.join(' • ');
};
 

const CounterPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Counters — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <h1>A List of Important Dates</h1>
      <h2>goals &darr;</h2>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/meetfresh.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">First Meetup</h1>
          <h2> MeetFresh, Redmond, WA </h2>
          <h2> {firstmeetup.toDateString()}</h2>
          <h2> {Date.getFormattedDateDiff(firstmeetup, today)}<span role="img" aria-label="love">❤️</span></h2>
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/driveway.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Anniversary</h1>
          <h2> Emily's Driveway, Richmond Hill, ON </h2>
          <h2> {anniversary.toDateString()} </h2>
          <h2> {Date.getFormattedDateDiff(anniversary, today)}<span role="img" aria-label="love">❤️</span></h2>
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/lakewilcox.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Second Meetup</h1>
          <h2> Lake Wilcox, Richmond Hill, ON </h2>
          <h2> {secondmeetup.toDateString()}</h2>
          <h2> {Date.getFormattedDateDiff(secondmeetup, today)}<span role="img" aria-label="love">❤️</span></h2>
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/plane.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Emily Leaves</h1>
          <h2> Seattle, WA (See you soon!) </h2>
          <h2> {leavingdate.toDateString()}</h2>
          <h2> {Date.getFormattedDateDiff(today, leavingdate)}<span role="img" aria-label="love">❤️</span></h2>
        </div>
      </div>
    </Layout>
  )
}
export default CounterPage
export const pageQuery = graphql`
  query CounterPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`