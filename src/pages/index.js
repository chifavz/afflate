import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Chifavz Tech Review">
      <Seo title="Home Page" />
      <StaticImage
        alt="two people with square POS"
        src="../images/squares.jpg"
      />
      
<div>
  <h2>Sign Up with Square for Seamless Payment Solutions</h2>
  <p>Ready to revolutionize the way you accept payments? Sign up with Square today and enjoy a range of benefits, including:</p>
  <ul>
    <li>Fast and secure payment processing</li>
    <li>Seamless integration with your business</li>
    <li>Robust analytics for better business insights</li>
    <li>24/7 customer support</li>
  </ul>
  <p>Take your business to the next level with Square. <a href="https://squareup.com">Sign up now</a>!</p>
</div>


      <h3>Latest Posts:</h3>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
     
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default HomePage

