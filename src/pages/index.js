import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Welcome to Chifavz Studio Your Ultimate Guide to Tech Products and Accessories!">
      <Seo title="Home Page" />
      <StaticImage
        alt="gadgets"
        src="../images/techgadget.png"
      />
      <h2>At Chifavz Studio, we're passionate about technology and helping you find the best products and accessories to enhance your digital lifestyle. Whether you're a tech enthusiast, a casual user, or someone looking for the perfect gift, we've got you covered.</h2>
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

