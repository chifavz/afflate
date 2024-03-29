// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Define your component
const HomePage = () => {
  return (
    
        <Layout pageTitle="Fav Review">
      
      <h2>Welcome to FavzReview Your Ultimate Guide to Tech Gadgets and Accessories!</h2>
      <p>At FavReview, we're passionate about technology and helping you find the best gadgets and accessories to enhance your digital lifestyle. Whether you're a tech enthusiast, a casual user, or someone looking for the perfect gift, we've got you covered.</p>
     
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default HomePage
