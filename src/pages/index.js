import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Chifavz Studio Tech Review">
      <Seo title="Home Page" />
      <StaticImage
        alt="gadgets"
        src="../images/techgadget.png"
      />
      <h2>Discover the Latest in Tech with Chifavz Studio</h2>
<p>At Chifavz Studio, we're dedicated to providing insightful reviews and recommendations on the latest technology products. Whether you're a tech enthusiast seeking the newest gadgets, a casual user looking for reliable devices, or someone searching for the perfect tech gift, we've got you covered. Explore our reviews to find the best tech solutions for your digital lifestyle.</p>

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

