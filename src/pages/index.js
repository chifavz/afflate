// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


// Step 2: Define your component
const HomePage = () => {
  return (
    
        <Layout pageTitle="Welcome to Chifavz Studio Your Ultimate Guide to Tech Products and Accessories!">
      
      
      <StaticImage
      alt="gadgates"
      src="../images/techgadget.png" />

      <h2>At Chifavz Studio, we're passionate about technology and helping you find the best products and accessories to enhance your digital lifestyle. Whether you're a tech enthusiast, a casual user, or someone looking for the perfect gift, we've got you covered.</h2>
     
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default HomePage
