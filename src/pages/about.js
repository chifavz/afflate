// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Explore the Latest in Tech with Chifavz Studio">
      <h2>Explore the Cutting-Edge World of Technology with Chifavz Studio</h2>
      <StaticImage
        alt="gadgets"
        src="../images/techgadget.png"
      />
      <p>Chifavz Studio is your gateway to the latest advancements and innovations in technology. We are passionate about providing in-depth reviews and insightful recommendations on the most exciting tech products in the market. Whether you're a tech enthusiast seeking the next big thing, a casual user looking for reliable devices, or someone on the hunt for the perfect tech gift, our comprehensive reviews and guides are here to assist you. Dive into our world of tech reviews and discover the best solutions to elevate your digital lifestyle.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />
// Step 3: Export your component
export default AboutPage