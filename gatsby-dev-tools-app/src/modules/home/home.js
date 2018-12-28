import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './home.css'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)

const Home = () => (
  <div className="App-Container">
    <header className="App-header">
      <div className="App-logo">
        <Image />
      </div>
      <p>Provide Tools which developer sometimes use by Gatsby</p>
      <a
        className="App-link"
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Gatsby
      </a>
    </header>
  </div>
)

export default Home
