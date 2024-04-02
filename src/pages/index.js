// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const HomePage = () => {
  return (
    
        <Layout pageTitle="ISGO STUDIO REVIEW">
      
      <h2>Welcome to ISGO STUDIO REVIEW Your Ultimate Guide to Tech Products and Accessories!</h2>
      <StaticImage
      alt="gadgates"
      src="../images/techgadget.png" />

      <p>At Isgo Studio Review, we're passionate about technology and helping you find the best products and accessories to enhance your digital lifestyle. Whether you're a tech enthusiast, a casual user, or someone looking for the perfect gift, we've got you covered.</p>
     
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default HomePage
